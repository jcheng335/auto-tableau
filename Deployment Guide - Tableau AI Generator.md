# Deployment Guide - Tableau AI Generator

This guide will walk you through deploying the Tableau AI Generator to Netlify (frontend) and Vercel (backend).

## 📋 Prerequisites

- GitHub account
- Netlify account (free)
- Vercel account (free)
- OpenAI API key (optional, for AI features)

## 🚀 Step-by-Step Deployment

### Step 1: Push to GitHub

1. **Create a new repository on GitHub**:
   - Go to GitHub and create a new repository named `tableau-ai-generator`
   - Don't initialize with README (we already have one)

2. **Push your code**:
   ```bash
   cd tableau-ai-generator
   git init
   git add .
   git commit -m "Initial commit: Tableau AI Generator"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tableau-ai-generator.git
   git push -u origin main
   ```

### Step 2: Deploy Backend to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `tableau-ai-backend` folder as the root directory
   - Vercel will automatically detect it's a Python project
   - Click "Deploy"

3. **Configure Environment Variables**:
   - In Vercel dashboard, go to your project settings
   - Add environment variables:
     ```
     OPENAI_API_KEY=your_openai_api_key_here
     FLASK_ENV=production
     ```

4. **Note your backend URL**:
   - After deployment, copy the URL (e.g., `https://tableau-ai-backend.vercel.app`)

### Step 3: Deploy Frontend to Netlify

1. **Update API Configuration**:
   - Edit `tableau-ai-frontend/netlify.toml`
   - Replace `https://your-backend-url.vercel.app` with your actual Vercel URL

2. **Deploy via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect to GitHub and select your repository
   - Set build settings:
     - **Base directory**: `tableau-ai-frontend`
     - **Build command**: `npm run build`
     - **Publish directory**: `tableau-ai-frontend/dist`
   - Click "Deploy site"

3. **Configure Environment Variables** (if needed):
   - In Netlify dashboard, go to Site settings > Environment variables
   - Add any required variables

### Step 4: Test Your Deployment

1. **Visit your Netlify URL**
2. **Test all features**:
   - Dashboard loads correctly
   - Upload page accepts files
   - AI Generate page works
   - Generated workbooks page displays

3. **Check API connectivity**:
   - Open browser developer tools
   - Verify API calls are reaching your Vercel backend

## 🔧 Configuration Options

### Custom Domain (Optional)

#### Netlify Custom Domain:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS records as instructed

#### Vercel Custom Domain:
1. Go to Project settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Environment Variables

#### Frontend Environment Variables:
```bash
# In Netlify dashboard
VITE_API_URL=https://your-backend-url.vercel.app
```

#### Backend Environment Variables:
```bash
# In Vercel dashboard
OPENAI_API_KEY=your_openai_api_key_here
FLASK_ENV=production
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Build Fails on Netlify
- **Problem**: Frontend build fails
- **Solution**: Check Node.js version in `netlify.toml`
- **Fix**: Ensure Node.js 20+ is specified

#### 2. API Calls Fail
- **Problem**: Frontend can't reach backend
- **Solution**: Check CORS configuration and API URL
- **Fix**: Verify `netlify.toml` redirects are correct

#### 3. Backend Deployment Fails
- **Problem**: Vercel deployment fails
- **Solution**: Check `requirements.txt` and Python version
- **Fix**: Ensure Python 3.11 is specified in `runtime.txt`

#### 4. File Upload Doesn't Work
- **Problem**: File uploads fail
- **Solution**: Check file size limits and CORS
- **Fix**: Verify backend handles multipart/form-data

### Debug Steps

1. **Check Netlify Deploy Logs**:
   - Go to Deploys tab in Netlify dashboard
   - Click on failed deploy to see logs

2. **Check Vercel Function Logs**:
   - Go to Functions tab in Vercel dashboard
   - Check real-time logs for errors

3. **Test API Endpoints**:
   ```bash
   curl https://your-backend-url.vercel.app/api/health
   ```

4. **Check Browser Console**:
   - Open developer tools
   - Look for JavaScript errors or failed API calls

## 🔄 Continuous Deployment

### Automatic Deployments

Both Netlify and Vercel will automatically deploy when you push to your main branch:

1. **Make changes locally**
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update feature"
   git push origin main
   ```
3. **Deployments trigger automatically**

### Branch Deployments

- **Netlify**: Automatically creates preview deployments for pull requests
- **Vercel**: Creates preview deployments for all branches

## 📊 Monitoring

### Netlify Analytics
- Enable Netlify Analytics for traffic insights
- Monitor build times and success rates

### Vercel Analytics
- Enable Vercel Analytics for performance monitoring
- Track function execution times and errors

## 🔒 Security Considerations

1. **Environment Variables**:
   - Never commit API keys to Git
   - Use platform environment variable settings

2. **CORS Configuration**:
   - Restrict origins in production if needed
   - Currently allows all origins for development

3. **File Upload Security**:
   - File type validation is implemented
   - File size limits are enforced

## 📈 Scaling

### Performance Optimization

1. **Frontend**:
   - Static files are cached by CDN
   - Gzip compression enabled
   - Image optimization

2. **Backend**:
   - Serverless functions scale automatically
   - Consider database for persistent storage
   - Implement caching for repeated requests

### Cost Optimization

1. **Netlify Free Tier**:
   - 100GB bandwidth/month
   - 300 build minutes/month

2. **Vercel Free Tier**:
   - 100GB bandwidth/month
   - 100GB-hours function execution

## 🎉 Success!

Your Tableau AI Generator is now deployed and accessible worldwide!

- **Frontend**: Your Netlify URL
- **Backend**: Your Vercel URL
- **Repository**: Your GitHub repository

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review platform documentation (Netlify/Vercel)
3. Check GitHub Issues for similar problems

---

**Happy deploying! 🚀**

