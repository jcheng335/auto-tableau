# Quick Start Guide - Tableau AI Generator

Get your Tableau AI Generator deployed in 15 minutes!

## 🚀 Fast Track Deployment

### 1. Upload to GitHub (2 minutes)

```bash
# Navigate to your project
cd tableau-ai-generator

# Initialize git and push
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/tableau-ai-generator.git
git push -u origin main
```

### 2. Deploy Backend to Vercel (3 minutes)

1. Go to [vercel.com](https://vercel.com) → "New Project"
2. Import your GitHub repo
3. Set **Root Directory** to `tableau-ai-backend`
4. Click "Deploy"
5. Copy your Vercel URL (e.g., `https://tableau-ai-backend-xyz.vercel.app`)

### 3. Deploy Frontend to Netlify (5 minutes)

1. **Update API URL**:
   - Edit `tableau-ai-frontend/netlify.toml`
   - Replace `https://your-backend-url.vercel.app` with your Vercel URL

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com) → "New site from Git"
   - Select your GitHub repo
   - Set **Base directory** to `tableau-ai-frontend`
   - Set **Build command** to `npm run build`
   - Set **Publish directory** to `tableau-ai-frontend/dist`
   - Click "Deploy site"

### 4. Test Your App (2 minutes)

1. Visit your Netlify URL
2. Test the dashboard, upload, and AI generate pages
3. Verify API connectivity in browser dev tools

### 5. Optional: Add OpenAI API Key (3 minutes)

1. In Vercel dashboard → Project Settings → Environment Variables
2. Add: `OPENAI_API_KEY` = `your_openai_api_key_here`
3. Redeploy backend

## ✅ You're Done!

Your Tableau AI Generator is now live at your Netlify URL!

## 🔧 Quick Commands

```bash
# Local development
npm run dev:frontend    # Start React dev server
npm run dev:backend     # Start Flask dev server

# Build for production
npm run build:frontend  # Build React app

# Deploy (if CLI tools installed)
npm run deploy:frontend # Deploy to Netlify
npm run deploy:backend  # Deploy to Vercel
```

## 📱 What You Get

- ✅ **Modern React Frontend** - Responsive, fast, professional
- ✅ **Flask Backend API** - Scalable, serverless, secure
- ✅ **File Upload System** - TWB/TWBX/HYPER support
- ✅ **AI Generation Interface** - Natural language to workbooks
- ✅ **Download Management** - Generated workbook access
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **Production Ready** - Optimized for performance

## 🆘 Need Help?

- **Build fails?** Check `DEPLOYMENT_GUIDE.md`
- **API not working?** Verify URLs in `netlify.toml`
- **Want to customize?** See `README.md`

## 🎉 Success!

Your AI-powered Tableau workbook generator is now live and ready to use!

Share your Netlify URL and start generating workbooks with AI! 🚀

