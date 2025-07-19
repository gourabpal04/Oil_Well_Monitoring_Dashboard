const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const authRoutes = require('./server/api/auth');
const ongcNewsProxy = require('./server/ongcNewsProxy');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// CSV file paths
const wellDataPath = path.join(dataDir, 'well_data.csv');
const usersPath = path.join(__dirname, 'src', 'data', 'users.csv');

// Create well_data.csv file with headers if it doesn't exist
if (!fs.existsSync(wellDataPath)) {
  const headers = 'Place,Well Name,Status,FTHP (psi),Qg (MMSCMD),Qc (m³/day),Qw (m³/day),Latitude,Longitude,Reason,Plan,Timestamp\n';
  fs.writeFileSync(wellDataPath, headers);
}

// Create users.csv file with headers if it doesn't exist
if (!fs.existsSync(usersPath)) {
  const headers = 'name,username,password\n';
  fs.writeFileSync(usersPath, headers);
}

// Ensure users.csv is readable and writable
try {
  fs.accessSync(usersPath, fs.constants.R_OK | fs.constants.W_OK);
} catch (err) {
  console.error('Error: users.csv is not accessible');
  // Create the directory if it doesn't exist
  const usersDirPath = path.dirname(usersPath);
  if (!fs.existsSync(usersDirPath)) {
    fs.mkdirSync(usersDirPath, { recursive: true });
  }
  // Create the file with headers
  const headers = 'name,username,password\n';
  fs.writeFileSync(usersPath, headers);
}

// Endpoint to save well data
app.post('/api/save-well-data', (req, res) => {
  try {
    const { place, wellName, status, fthp, qg, qc, qw, latitude, longitude, reason, plan } = req.body;
    const timestamp = new Date().toISOString();
    
    // Format data as CSV row, handling empty values
    const csvRow = `"${place}","${wellName}","${status}",${fthp || ''},${qg || ''},${qc || ''},${qw || ''},${latitude},${longitude},"${reason || ''}","${plan || ''}","${timestamp}"\n`;
    
    // Append to CSV file
    fs.appendFileSync(wellDataPath, csvRow);
    
    // Also update the wells.json file
    const wellsJsonPath = path.join(__dirname, 'src', 'data', 'wells.json');
    let wells = [];
    try {
      const wellsData = fs.readFileSync(wellsJsonPath, 'utf8');
      wells = JSON.parse(wellsData);
    } catch (error) {
      console.error('Error reading wells.json:', error);
    }

    // Add new well data
    const newWell = {
      name: wellName,
      location: place,
      status,
      lat: parseFloat(latitude),
      long: parseFloat(longitude)
    };

    // Add optional fields if they exist
    if (fthp) newWell.fthp = parseFloat(fthp);
    if (qg) newWell.qg = parseFloat(qg);
    if (qc) newWell.qc = parseFloat(qc);
    if (qw) newWell.qw = parseFloat(qw);
    if (reason) newWell.reason = reason;
    if (plan) newWell.plan = plan;

    // Add to wells array
    wells.push(newWell);

    // Save updated wells data
    fs.writeFileSync(wellsJsonPath, JSON.stringify(wells, null, 2));
    
    res.json({ success: true, message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ success: false, message: 'Error saving data' });
  }
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api', ongcNewsProxy);

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all: send back React's index.html for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
const HTTPS_PORT = process.env.HTTPS_PORT || 5001;
const HOST = process.env.HOST || 'localhost';

// Simple self-signed certificate generation
const { execSync } = require('child_process');
let httpsOptions = {};

try {
  // Try to use existing certificates
  httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.crt'))
  };
} catch (error) {
  console.log('Creating self-signed certificates...');
  try {
    // Generate self-signed certificate using OpenSSL
    execSync('openssl req -x509 -newkey rsa:4096 -keyout server.key -out server.crt -days 365 -nodes -subj "/CN=localhost"', { stdio: 'ignore' });
    httpsOptions = {
      key: fs.readFileSync(path.join(__dirname, 'server.key')),
      cert: fs.readFileSync(path.join(__dirname, 'server.crt'))
    };
  } catch (sslError) {
    console.log('OpenSSL not available, using HTTP only');
    httpsOptions = null;
  }
}

// Create HTTP server
const httpServer = http.createServer(app);

// Start HTTP server
httpServer.listen(PORT, HOST, () => {
  console.log(`HTTP Server is running on http://${HOST}:${PORT}`);
});

// Start HTTPS server if certificates are available
if (httpsOptions.key && httpsOptions.cert) {
  const httpsServer = https.createServer(httpsOptions, app);
  httpsServer.listen(HTTPS_PORT, HOST, () => {
    console.log(`HTTPS Server is running on https://${HOST}:${HTTPS_PORT}`);
    console.log('Note: You may see a security warning in your browser. This is normal for self-signed certificates.');
  });
} else {
  console.log('HTTPS server not started - certificates not available');
} 