# Deployment Guide

Complete guide for deploying the Tableau AI Generator to Vercel.

## 🚀 Vercel Deployment

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Git installed locally

### Step-by-Step Deployment

#### 1. Prepare Repository
```bash
# Clone or download the project
git clone https://github.com/YOUR_USERNAME/tableau-ai-generator.git
cd tableau-ai-generator

# Initialize git (if needed)
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/tableau-ai-generator.git
git push -u origin main
```

#### 2. Deploy to Vercel
1. **Visit [vercel.com](https://vercel.com)**
2. **Sign in** with your GitHub account
3. **Click "New Project"**
4. **Import** your GitHub repository
5. **Configure project**:
   - Framework Preset: `Vite` (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
6. **Click "Deploy"**

#### 3. Configure Environment Variables (Optional)
1. **Go to Project Settings** in Vercel dashboard
2. **Navigate to Environment Variables**
3. **Add variables**:
   - `OPENAI_API_KEY` = `your_openai_api_key` (for AI features)
   - `NODE_ENV` = `production`

#### 4. Verify Deployment
1. **Visit your live URL** (provided by Vercel)
2. **Test all features**:
   - Dashboard loads correctly
   - File upload works
   - AI generation responds
   - Downloads function properly

## 🔧 Configuration Details

### Vercel Configuration (`vercel.json`)
```json
{
  "functions": {
    "api/*.py": {
      "runtime": "python3.9"
    }
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Build Configuration
- **Frontend**: Vite builds React app to `dist/` directory
- **Backend**: Python serverless functions in `api/` directory
- **Routing**: SPA routing handled by Vercel rewrites

## 🛠️ Local Development

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing API Functions Locally
```bash
# Install Vercel CLI
npm install -g vercel

# Run local development server with functions
vercel dev
```

## 🔍 Troubleshooting

### Common Issues

#### Build Fails
- **Check Node.js version**: Ensure Node.js 18+ is used
- **Clear cache**: Delete `node_modules` and `package-lock.json`, then `npm install`
- **Check dependencies**: Ensure all packages in `package.json` are compatible

#### API Functions Not Working
- **Check Python version**: Vercel uses Python 3.9
- **Verify file structure**: API files must be in `api/` directory
- **Check imports**: Ensure all Python imports are available in Vercel environment

#### Environment Variables
- **Case sensitivity**: Variable names are case-sensitive
- **Redeploy required**: Changes to environment variables require redeployment
- **Scope**: Variables are available to both build and runtime

### Performance Optimization
- **Enable Vercel Analytics** in project settings
- **Use Vercel Edge Functions** for better performance (if needed)
- **Optimize bundle size** with code splitting

## 📊 Monitoring

### Vercel Dashboard
- **Function logs**: Real-time serverless function logs
- **Analytics**: Performance and usage metrics
- **Deployments**: History of all deployments

### Health Checks
- **API Health**: `GET /api/health`
- **Frontend**: Main application loads
- **Functions**: All API endpoints respond correctly

## 🔄 Continuous Deployment

### Automatic Deployment
- **Git Integration**: Pushes to main branch trigger automatic deployment
- **Preview Deployments**: Pull requests create preview deployments
- **Rollback**: Easy rollback to previous deployments

### Manual Deployment
```bash
# Using Vercel CLI
vercel --prod

# Or push to GitHub
git push origin main
```

## 🔒 Security

### Best Practices
- **Environment Variables**: Store sensitive data in Vercel environment variables
- **CORS**: Properly configured for cross-origin requests
- **File Validation**: Upload files are validated for type and size
- **HTTPS**: Automatic HTTPS for all deployments

## 📱 Domain Configuration

### Custom Domain
1. **Add domain** in Vercel project settings
2. **Configure DNS** records as instructed
3. **SSL certificate** automatically provisioned

### Subdomain
- Use Vercel-provided subdomain: `your-project.vercel.app`
- Or configure custom subdomain

## 🆘 Support

### Resources
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Issues**: Report bugs and feature requests
- **Community**: Vercel Discord and GitHub Discussions

### Getting Help
1. **Check logs** in Vercel dashboard
2. **Review documentation** for common solutions
3. **Search GitHub issues** for similar problems
4. **Create new issue** with detailed information

---

**Your Tableau AI Generator is now ready for production use on Vercel! 🎉**

