# Tableau AI Generator - Installation Guide

## System Requirements

### Minimum Requirements
- **Operating System:** Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Python:** Version 3.11 or higher
- **Node.js:** Version 20 or higher
- **Memory:** 4GB RAM minimum, 8GB recommended
- **Storage:** 2GB free space for installation and generated files
- **Internet:** Required for OpenAI API access

### Recommended Requirements
- **Memory:** 16GB RAM for optimal performance
- **Storage:** 10GB+ for large workbook processing
- **CPU:** Multi-core processor for faster generation
- **Network:** Stable broadband connection

## Prerequisites Installation

### 1. Install Python 3.11+

**Windows:**
```bash
# Download from python.org or use winget
winget install Python.Python.3.11

# Verify installation
python --version
pip --version
```

**macOS:**
```bash
# Using Homebrew
brew install python@3.11

# Verify installation
python3 --version
pip3 --version
```

**Linux (Ubuntu/Debian):**
```bash
# Update package list
sudo apt update

# Install Python 3.11
sudo apt install python3.11 python3.11-pip python3.11-venv

# Verify installation
python3.11 --version
pip3 --version
```

### 2. Install Node.js 20+

**Windows:**
```bash
# Download from nodejs.org or use winget
winget install OpenJS.NodeJS

# Verify installation
node --version
npm --version
```

**macOS:**
```bash
# Using Homebrew
brew install node@20

# Verify installation
node --version
npm --version
```

**Linux (Ubuntu/Debian):**
```bash
# Using NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### 3. Install pnpm (Package Manager)

```bash
# Install pnpm globally
npm install -g pnpm

# Verify installation
pnpm --version
```

## Project Installation

### Step 1: Download the Project

**Option A: Direct Download**
1. Download the project files to your local machine
2. Extract to a directory like `tableau_ai_generator`

**Option B: Git Clone (if available)**
```bash
git clone <repository-url> tableau_ai_generator
cd tableau_ai_generator
```

### Step 2: Backend Setup

```bash
# Navigate to the project directory
cd tableau_ai_generator

# Navigate to backend directory
cd tableau_ai_backend

# Create virtual environment (recommended)
python3 -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Verify installation
python -c "import flask; print('Flask installed successfully')"
python -c "import openai; print('OpenAI installed successfully')"
```

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd tableau_ai_frontend

# Install Node.js dependencies
pnpm install

# Verify installation
pnpm list react
pnpm list vite
```

### Step 4: Environment Configuration

#### Backend Environment Variables

Create a `.env` file in the `tableau_ai_backend` directory:

```bash
# tableau_ai_backend/.env
OPENAI_API_KEY=your-openai-api-key-here
OPENAI_API_BASE=https://api.openai.com/v1
FLASK_ENV=development
FLASK_DEBUG=True
```

**Getting OpenAI API Key:**
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key to your `.env` file

#### Frontend Configuration

The frontend is pre-configured with proxy settings in `vite.config.js`:

```javascript
// tableau_ai_frontend/vite.config.js
export default defineConfig({
  // ... other config
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
```

## Running the Application

### Method 1: Manual Startup (Recommended for Development)

**Terminal 1 - Backend:**
```bash
cd tableau_ai_generator/tableau_ai_backend

# Activate virtual environment
source venv/bin/activate  # macOS/Linux
# or
venv\Scripts\activate     # Windows

# Start Flask backend
python src/main.py
```

**Terminal 2 - Frontend:**
```bash
cd tableau_ai_generator/tableau_ai_frontend

# Start React development server
pnpm run dev --host
```

### Method 2: Using Scripts (Create these for convenience)

**Create `start-backend.sh` (macOS/Linux) or `start-backend.bat` (Windows):**

```bash
#!/bin/bash
cd tableau_ai_backend
source venv/bin/activate
python src/main.py
```

**Create `start-frontend.sh` (macOS/Linux) or `start-frontend.bat` (Windows):**

```bash
#!/bin/bash
cd tableau_ai_frontend
pnpm run dev --host
```

### Accessing the Application

1. **Backend API:** http://localhost:5000
2. **Frontend Application:** http://localhost:5173
3. **Health Check:** http://localhost:5173 (should show the dashboard)

## Verification and Testing

### 1. Backend Health Check

```bash
# Test API endpoint
curl http://localhost:5000/api/tableau/health

# Expected response:
# {"service": "Tableau AI Generator API", "status": "healthy", "version": "1.0.0"}
```

### 2. Frontend Loading

1. Open browser to http://localhost:5173
2. Should see the Tableau AI Generator dashboard
3. All navigation items should be accessible
4. System status should show "Operational"

### 3. End-to-End Test

1. Navigate to AI Generate page
2. Enter test prompt: "Create a simple sales chart"
3. Click Generate Workbook
4. Should see success notification
5. Check Generated page for the new workbook

## Troubleshooting Installation

### Common Python Issues

**Issue: Python version conflicts**
```bash
# Use specific Python version
python3.11 -m venv venv
```

**Issue: pip installation failures**
```bash
# Upgrade pip
pip install --upgrade pip

# Install with verbose output
pip install -r requirements.txt -v
```

**Issue: Virtual environment problems**
```bash
# Remove and recreate virtual environment
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Common Node.js Issues

**Issue: pnpm not found**
```bash
# Install pnpm globally
npm install -g pnpm

# Or use npm instead
npm install
npm run dev
```

**Issue: Port conflicts**
```bash
# Change frontend port in package.json
"dev": "vite --port 3000 --host"

# Or kill existing processes
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:5173 | xargs kill -9
```

### Common API Issues

**Issue: OpenAI API key not working**
1. Verify API key is correct
2. Check OpenAI account has credits
3. Ensure API key has proper permissions
4. Test API key with curl:
```bash
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer your-api-key-here"
```

**Issue: CORS errors**
- Ensure backend is running on port 5000
- Check proxy configuration in vite.config.js
- Verify both servers are running

### File Permission Issues

**Linux/macOS:**
```bash
# Make scripts executable
chmod +x start-backend.sh
chmod +x start-frontend.sh

# Fix file permissions
sudo chown -R $USER:$USER tableau_ai_generator
```

## Production Deployment

### Environment Setup

**Production Environment Variables:**
```bash
# .env.production
OPENAI_API_KEY=your-production-api-key
OPENAI_API_BASE=https://api.openai.com/v1
FLASK_ENV=production
FLASK_DEBUG=False
```

### Build Frontend for Production

```bash
cd tableau_ai_frontend

# Build production version
pnpm run build

# Serve built files (optional)
pnpm run preview
```

### Production Server Setup

**Using Gunicorn (Recommended):**
```bash
# Install Gunicorn
pip install gunicorn

# Run production server
cd tableau_ai_backend
gunicorn -w 4 -b 0.0.0.0:5000 src.main:app
```

**Using Docker (Advanced):**
```dockerfile
# Dockerfile example
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "src.main:app"]
```

## Security Considerations

### API Key Security
- Never commit API keys to version control
- Use environment variables for all secrets
- Rotate API keys regularly
- Monitor API usage and costs

### File Upload Security
- Validate file types and sizes
- Scan uploaded files for malware
- Implement rate limiting
- Use secure file storage

### Network Security
- Use HTTPS in production
- Implement proper CORS policies
- Add authentication if needed
- Monitor for suspicious activity

## Maintenance and Updates

### Regular Maintenance Tasks

1. **Update Dependencies:**
```bash
# Python packages
pip list --outdated
pip install --upgrade package-name

# Node.js packages
pnpm update
```

2. **Clean Up Generated Files:**
```bash
# Remove old generated workbooks
find ./generated -name "*.twb" -mtime +30 -delete
```

3. **Monitor Logs:**
- Check Flask application logs
- Monitor browser console for errors
- Review API usage statistics

### Backup and Recovery

1. **Backup Configuration:**
   - Environment variables
   - Custom configurations
   - Generated workbooks

2. **Recovery Procedures:**
   - Reinstall dependencies
   - Restore configuration files
   - Test all functionality

---

**Installation Support:**
- Check logs for detailed error messages
- Verify all prerequisites are installed
- Test with minimal examples first
- Ensure stable internet connection for API access

**Version:** 1.0.0  
**Last Updated:** August 12, 2025  
**Tested On:** Windows 11, macOS 14, Ubuntu 22.04

