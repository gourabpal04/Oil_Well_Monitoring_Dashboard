# ONGC - Oil & Natural Gas Corporation Dashboard

A comprehensive oil well monitoring dashboard with real-time data visualization, analytics, and data entry capabilities.

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 16 or higher)
  - Download from: https://nodejs.org/
  - Install the LTS version

### Installation

1. **Extract the project files** to a folder on your computer

2. **Open Command Prompt or PowerShell** and navigate to the project folder:
   ```cmd
   cd path\to\your\project\folder
   ```

3. **Install dependencies:**
   ```cmd
   npm install
   ```

4. **Start the application:**
   ```cmd
   npm run dev
   ```

5. **Open your browser** and go to: `http://localhost:3000`

## 📁 Project Structure

```
ongc/
├── src/                    # React application source code
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── data/              # Static data files
│   └── utils/             # Utility functions
├── server/                # Backend API server
├── public/                # Static assets
├── data/                  # Data storage
└── server.js              # Express server
```

## 🛠️ Available Scripts

- `npm start` - Start React development server
- `npm run server` - Start Express backend server
- `npm run dev` - Start both frontend and backend servers
- `npm run build` - Build for production
- `npm test` - Run tests

## 🌐 Access Points

- **Frontend (React App):** `http://localhost:3000`
- **Backend (API Server):** `http://localhost:5000`
- **HTTPS Server:** `https://localhost:5001`

## 🔧 Features

- **Real-time Dashboard** with oil well monitoring
- **Interactive Maps** showing well locations
- **Data Entry Forms** for well information
- **Production Analytics** with charts and graphs
- **Alert Management** system
- **Maintenance Logs** tracking
- **Responsive Design** for all devices

## 📊 Data Management

- Well data is stored in `data/well_data.csv`
- User data is stored in `src/data/users.csv`
- Static well information in `src/data/wells.json`

## 🔒 Security

- HTTPS support with self-signed certificates
- CORS enabled for cross-origin requests
- Input validation and sanitization

## 🐛 Troubleshooting

### Port Already in Use
If you get "port already in use" errors:
```cmd
# Kill existing Node.js processes
taskkill /f /im node.exe
```

### Permission Errors
Run Command Prompt as Administrator if you encounter permission issues.

### Dependencies Issues
If `npm install` fails:
```cmd
npm cache clean --force
npm install
```

## 📞 Support

For issues or questions, check the console output for error messages or contact the development team.

---

**ONGC - Oil & Natural Gas Corporation**  
*Empowering Energy Independence* 