const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const CSV_FILE_PATH = path.join(__dirname, '../../src/data/users.csv');

// Helper function to read CSV file
const readCsv = async () => {
  try {
    const fileContent = await fs.readFile(CSV_FILE_PATH, 'utf-8');
    const lines = fileContent.split('\n');
    const results = [];
    
    // Skip header
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const [name, username, password] = lines[i].split(',').map(field => field.trim());
        if (name && username && password) {
          results.push({ name, username, password });
        }
      }
    }
    
    return results;
  } catch (error) {
    console.error('Error reading CSV:', error);
    return [];
  }
};

// Helper function to write to CSV file
const writeCsv = async (users) => {
  try {
    let content = 'name,username,password\n';
    users.forEach(user => {
      content += `${user.name},${user.username},${user.password}\n`;
    });
    await fs.writeFile(CSV_FILE_PATH, content, 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing CSV:', error);
    return false;
  }
};

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const users = await readCsv();
    
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    
    res.json({ message: 'Login successful', name: user.name });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Sign up
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const users = await readCsv();
    
    if (users.some(u => u.username === username)) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    // Use email as name for now, or you can modify the CSV structure to include email
    users.push({ name: email, username, password: hashedPassword });
    
    const success = await writeCsv(users);
    if (!success) {
      throw new Error('Failed to write to CSV file');
    }
    
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Sign up error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Forgot password
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const users = await readCsv();
    
    // Check if user exists (using email as name for now)
    const user = users.find(u => u.name === email);
    if (!user) {
      // Don't reveal if email exists or not for security
      return res.json({ message: 'If the email exists, reset instructions have been sent' });
    }
    
    // In a real application, you would:
    // 1. Generate a reset token
    // 2. Store it in database with expiration
    // 3. Send email with reset link
    // For now, we'll just return a success message
    
    res.json({ message: 'Password reset instructions have been sent to your email' });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Check username
router.post('/check-username', async (req, res) => {
  try {
    const { username } = req.body;
    
    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }

    const users = await readCsv();
    
    // Check if username exists
    const user = users.find(u => u.username === username);
    
    res.json({ 
      exists: !!user,
      message: user ? 'Username found' : 'Username not found'
    });
  } catch (error) {
    console.error('Username check error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Reset password
router.post('/reset-password', async (req, res) => {
  try {
    const { username, newPassword } = req.body;
    const users = await readCsv();
    
    const userIndex = users.findIndex(u => u.username === username);
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    users[userIndex].password = hashedPassword;
    
    const success = await writeCsv(users);
    if (!success) {
      throw new Error('Failed to write to CSV file');
    }
    
    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 