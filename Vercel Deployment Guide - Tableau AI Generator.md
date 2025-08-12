# Vercel Deployment Guide - Tableau AI Generator

This guide will walk you through deploying the Tableau AI Generator to Vercel in just a few minutes.

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Git installed locally

## 🚀 Quick Deployment (5 minutes)

### Step 1: Push to GitHub (2 minutes)

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

### Step 2: Deploy to Vercel (3 minutes)

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Create New Project**:
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect:
     - ✅ React frontend (Vite)
     - ✅ Python serverless functions
     - ✅ Build configuration

3. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - Get your live URL (e.g., `https://tableau-ai-generator.vercel.app`)

### Step 3: Test Your Deployment

1. **Visit your Vercel URL**
2. **Test all features**:
   - ✅ Dashboard loads correctly
   - ✅ Upload page accepts files
   - ✅ AI Generate page works
   - ✅ Generated workbooks page displays
   - ✅ API endpoints respond correctly

## 🔧 Advanced Configuration

### Environment Variables (Optional)

If you want to add AI features with OpenAI:

1. **In Vercel Dashboard**:
   - Go to Project Settings > Environment Variables
   - Add: `OPENAI_API_KEY` = `your_openai_api_key_here`
   - Redeploy the project

### Custom Domain (Optional)

1. **In Vercel Dashboard**:
   - Go to Project Settings > Domains
   - Add your custom domain
   - Configure DNS records as instructed

## 📊 What You Get

### ✅ **Production-Ready Features**
- **React Frontend** - Modern, responsive, fast
- **Python Backend** - Serverless API functions
- **File Upload System** - TWB/TWBX/HYPER support (100MB limit)
- **AI Generation Interface** - Natural language to workbooks
- **Download Management** - Generated workbook access
- **Mobile Responsive** - Works on all devices

### ✅ **Vercel Benefits**
- **Global CDN** - Fast loading worldwide
- **Automatic HTTPS** - Secure by default
- **Serverless Functions** - Scales automatically
- **Zero Configuration** - Works out of the box
- **Git Integration** - Auto-deploy on push
- **Analytics** - Built-in performance monitoring

## 🔄 Continuous Deployment

Every time you push to your main branch:

1. **Vercel automatically**:
   - Builds your React frontend
   - Deploys Python serverless functions
   - Updates your live site
   - Provides deployment preview

2. **Development workflow**:
   ```bash
   # Make changes locally
   git add .
   git commit -m "Add new feature"
   git push origin main
   # Vercel deploys automatically!
   ```

## 🐛 Troubleshooting

### Common Issues

#### 1. Build Fails
- **Problem**: Frontend build fails
- **Solution**: Check Node.js version compatibility
- **Fix**: Ensure package.json has correct dependencies

#### 2. API Functions Don't Work
- **Problem**: `/api/*` endpoints return 404
- **Solution**: Check `vercel.json` configuration
- **Fix**: Ensure Python functions are in `/api/` directory

#### 3. File Upload Fails
- **Problem**: File uploads don't work
- **Solution**: Check function timeout and memory limits
- **Fix**: Vercel functions have 10s timeout by default

### Debug Steps

1. **Check Vercel Function Logs**:
   - Go to Vercel Dashboard > Functions
   - Click on any function to see real-time logs

2. **Check Build Logs**:
   - Go to Vercel Dashboard > Deployments
   - Click on any deployment to see build logs

3. **Test API Endpoints**:
   ```bash
   curl https://your-app.vercel.app/api/health
   ```

4. **Check Browser Console**:
   - Open developer tools
   - Look for JavaScript errors or failed API calls

## 📈 Scaling & Performance

### Vercel Free Tier Limits
- **Bandwidth**: 100GB/month
- **Function Executions**: 100GB-hours/month
- **Build Time**: 6000 minutes/month
- **Serverless Function Timeout**: 10 seconds

### Performance Optimization
- **Frontend**: Static files cached globally
- **API Functions**: Cold start ~100-500ms
- **File Uploads**: Streamed processing
- **Database**: Consider adding for persistence

## 🔒 Security

### Built-in Security Features
- **HTTPS**: Automatic SSL certificates
- **CORS**: Configured for cross-origin requests
- **File Validation**: Type and size checking
- **Input Sanitization**: Prevents injection attacks

### Additional Security (Optional)
- **Rate Limiting**: Add to API functions
- **Authentication**: Implement user accounts
- **File Scanning**: Add virus/malware detection

## 💰 Cost Estimation

### Free Tier (Perfect for Testing)
- **Cost**: $0/month
- **Suitable for**: Personal projects, demos, testing

### Pro Tier (For Production)
- **Cost**: $20/month per member
- **Benefits**: Higher limits, team collaboration, analytics

## 🎉 Success!

Your Tableau AI Generator is now live at your Vercel URL!

### What's Next?
1. **Share your URL** with users
2. **Monitor usage** in Vercel dashboard
3. **Add features** and push updates
4. **Scale up** as needed

## 📞 Support

If you encounter issues:
1. Check this troubleshooting guide
2. Review [Vercel documentation](https://vercel.com/docs)
3. Check GitHub Issues for similar problems
4. Contact support via Vercel dashboard

---

**Happy deploying! 🚀**

**Your AI-powered Tableau workbook generator is now live on Vercel!**

