# Tableau AI Generator

An AI-powered web application that learns from existing Tableau workbooks and generates new workbooks from natural language prompts.

## 🚀 Features

- **Upload & Analyze**: Upload TWB, TWBX, or HYPER files to learn data structures
- **AI Generation**: Create new Tableau workbooks from text descriptions
- **Modern UI**: Clean, responsive React interface with Tailwind CSS
- **Cloud Ready**: Optimized for Netlify (frontend) and Vercel (backend) deployment

## 📁 Project Structure

```
tableau-ai-generator/
├── tableau-ai-frontend/     # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── assets/          # Static assets
│   │   └── App.jsx          # Main application
│   ├── dist/                # Built frontend (after npm run build)
│   ├── netlify.toml         # Netlify configuration
│   └── package.json         # Frontend dependencies
├── tableau-ai-backend/      # Flask backend API
│   ├── app.py               # Main Flask application
│   ├── requirements.txt     # Python dependencies
│   ├── vercel.json          # Vercel configuration
│   └── runtime.txt          # Python version
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🛠️ Local Development

### Prerequisites

- Node.js 20+ and npm
- Python 3.11+
- Git

### Frontend Setup

```bash
cd tableau-ai-frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd tableau-ai-backend
pip install -r requirements.txt
python app.py
```

The backend API will be available at `http://localhost:5000`

## 🌐 Deployment

### Frontend Deployment (Netlify)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/tableau-ai-generator.git
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on push

3. **Configure Environment**:
   - Update `netlify.toml` with your backend URL
   - Set environment variables in Netlify dashboard

### Backend Deployment (Vercel)

1. **Deploy to Vercel**:
   ```bash
   cd tableau-ai-backend
   vercel --prod
   ```

2. **Configure Environment Variables**:
   - Set `OPENAI_API_KEY` in Vercel dashboard
   - Configure any other required environment variables

3. **Update Frontend Configuration**:
   - Update the API URL in `netlify.toml` redirects
   - Redeploy frontend to use new backend URL

## 🔧 Configuration

### Environment Variables

#### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.vercel.app
```

#### Backend
```
OPENAI_API_KEY=your_openai_api_key_here
FLASK_ENV=production
```

### API Endpoints

- `GET /api/health` - Health check
- `GET /api/stats` - Get application statistics
- `POST /api/upload` - Upload Tableau workbook
- `POST /api/generate` - Generate new workbook from prompt
- `GET /api/generated` - List generated workbooks
- `GET /api/download/<id>` - Download generated workbook
- `DELETE /api/workbooks/<id>` - Delete workbook

## 📋 Supported File Types

- **TWB Files**: Tableau Workbook files containing visualizations and metadata
- **TWBX Files**: Packaged Tableau Workbooks with data extracts
- **HYPER Files**: Tableau data extracts from Alteryx or other tools

## 🎨 Technology Stack

### Frontend
- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **React Router** - Navigation
- **Vite** - Build tool

### Backend
- **Flask** - Web framework
- **Flask-CORS** - Cross-origin requests
- **OpenAI API** - AI generation (optional)
- **Pandas** - Data processing
- **Pillow** - Image processing

## 🔒 Security Features

- File type validation
- File size limits (100MB)
- CORS configuration
- Input sanitization
- Error handling

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
1. Check the GitHub Issues
2. Review the documentation
3. Contact the development team

## 🚀 Quick Start

1. **Clone the repository**
2. **Deploy backend to Vercel**
3. **Deploy frontend to Netlify**
4. **Configure environment variables**
5. **Start generating Tableau workbooks with AI!**

---

**Built with ❤️ for the Tableau community**

