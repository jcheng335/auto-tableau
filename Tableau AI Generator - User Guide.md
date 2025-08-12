# Tableau AI Generator - User Guide

## Overview

The Tableau AI Generator is a comprehensive system that reads existing Tableau workbooks (TWB/TWBX), learns their structure and data connections, and automatically creates new Tableau workbooks/dashboards from text prompts and optional layout images.

## Getting Started

### Prerequisites

- Python 3.11+ installed
- Node.js 20+ installed
- OpenAI API key (for AI generation)

### Quick Start

1. **Clone or Download the Project**
   ```bash
   # Navigate to the project directory
   cd tableau_ai_generator
   ```

2. **Set Up Backend**
   ```bash
   # Navigate to backend directory
   cd tableau_ai_backend
   
   # Install Python dependencies
   pip3 install -r requirements.txt
   
   # Set environment variables
   export OPENAI_API_KEY="your-openai-api-key-here"
   export OPENAI_API_BASE="https://api.openai.com/v1"
   
   # Start the Flask backend
   python3 src/main.py
   ```

3. **Set Up Frontend**
   ```bash
   # Open new terminal and navigate to frontend directory
   cd tableau_ai_frontend
   
   # Install Node.js dependencies
   pnpm install
   
   # Start the React development server
   pnpm run dev --host
   ```

4. **Access the Application**
   - Open your browser and go to `http://localhost:5173`
   - The system will be ready to use!

## User Interface Guide

### Dashboard Page
- **Overview:** Main landing page showing system statistics
- **Statistics Cards:** 
  - Uploaded Workbooks: Number of workbooks uploaded for learning
  - Analyzed Workbooks: Number of workbooks successfully analyzed
  - AI Ready: Number of workbooks ready for AI generation
  - Generated Workbooks: Number of AI-generated workbooks
- **Quick Actions:** Direct access to main functions

### Upload Page
- **File Upload:** Drag-and-drop or click to select files
- **Supported Formats:** TWB, TWBX, HYPER files (up to 100MB)
- **File Types Information:** Detailed explanation of each format
- **Processing:** Automatic analysis after upload

### AI Generate Page
- **Prompt Input:** Large text area for describing your desired workbook
- **Example Prompts:** Pre-written examples to get you started
- **Generation Button:** Starts the AI generation process
- **Progress Feedback:** Real-time status updates during generation

### Generated Workbooks Page
- **Workbook Cards:** Visual representation of generated workbooks
- **Metadata:** Creation date, model used, statistics
- **Download:** One-click download of generated TWB files
- **Generation Summary:** Overall statistics and metrics

## How to Use

### Step 1: Upload Reference Workbooks (Optional but Recommended)

1. Navigate to the **Upload** page
2. Drag and drop or select your existing Tableau workbooks
3. Supported formats:
   - **TWB Files:** Tableau Workbook files with visualizations and metadata
   - **TWBX Files:** Packaged workbooks including data extracts
   - **HYPER Files:** Data extracts from Alteryx or other tools
4. Wait for analysis to complete
5. The system will learn field types, relationships, and visualization patterns

### Step 2: Generate New Workbooks

1. Navigate to the **AI Generate** page
2. Describe your desired workbook in natural language:
   - Specify chart types (bar, line, scatter, pie, etc.)
   - Mention data fields and measures
   - Describe layout preferences
   - Include any specific requirements

3. **Example Prompts:**
   ```
   Create a sales dashboard with bar charts showing revenue by category 
   and a line chart showing trends over time
   
   Build a regional performance analysis with maps and comparison charts
   
   Design a customer analytics dashboard with segmentation and behavior analysis
   
   Generate a financial reporting dashboard with KPIs and trend analysis
   ```

4. Click **Generate Workbook**
5. Wait for AI processing (typically 3-5 seconds)
6. Review the success notification

### Step 3: Download and Use Generated Workbooks

1. Navigate to the **Generated** page
2. Browse your generated workbooks
3. Review the metadata and statistics
4. Click **Download** to get the TWB file
5. Open the downloaded file in Tableau Desktop
6. Connect to your data source and customize as needed

## Advanced Features

### AI Generation Capabilities

- **Natural Language Processing:** Understands complex visualization requirements
- **Field Mapping:** Automatically maps requested fields to available data
- **Layout Optimization:** Creates optimal dashboard layouts
- **Multiple Visualizations:** Supports various chart types and combinations
- **Dashboard Creation:** Automatically combines visualizations into dashboards

### Supported Visualization Types

- Bar Charts (horizontal and vertical)
- Line Charts and Time Series
- Scatter Plots and Bubble Charts
- Pie Charts and Donut Charts
- Maps and Geographic Visualizations
- Tables and Crosstabs
- KPI Cards and Metrics
- Histograms and Distributions

### Data Source Integration

- **Alteryx Integration:** Full support for Alteryx-produced HYPER files
- **CSV Data Sources:** Automatic field type detection
- **Database Connections:** Preserves connection metadata
- **Calculated Fields:** Maintains and suggests calculated fields
- **Field Relationships:** Understands data model relationships

## Troubleshooting

### Common Issues

**1. API Connection Errors**
- Ensure OpenAI API key is set correctly
- Check internet connection
- Verify API key has sufficient credits

**2. File Upload Issues**
- Check file size (max 100MB)
- Ensure file format is supported (TWB/TWBX/HYPER)
- Verify file is not corrupted

**3. Generation Failures**
- Try simpler prompts first
- Ensure uploaded workbooks for better field mapping
- Check console for detailed error messages

**4. Frontend Not Loading**
- Ensure both backend (port 5000) and frontend (port 5173) are running
- Check proxy configuration in vite.config.js
- Clear browser cache and reload

### Error Messages

- **"No AI-ready workbooks found":** Upload and analyze workbooks first
- **"Unexpected end of JSON input":** Backend API not responding
- **"Failed to generate workbook":** Check OpenAI API key and credits
- **"File too large":** Reduce file size or split into smaller files

## Technical Details

### System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend│    │   Flask Backend │    │   OpenAI API    │
│   (Port 5173)   │◄──►│   (Port 5000)   │◄──►│   (GPT-4)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │
         │                       ▼
         │              ┌─────────────────┐
         │              │ File Processing │
         │              │ & Analysis      │
         │              └─────────────────┘
         │                       │
         ▼                       ▼
┌─────────────────┐    ┌─────────────────┐
│ User Interface  │    │ Generated Files │
│ Components      │    │ Storage         │
└─────────────────┘    └─────────────────┘
```

### API Endpoints

- `GET /api/tableau/health` - System health check
- `POST /api/tableau/upload` - File upload and analysis
- `GET /api/tableau/workbooks` - List analyzed workbooks
- `POST /api/tableau/generate` - AI workbook generation
- `GET /api/tableau/generated` - List generated workbooks
- `GET /api/tableau/download/<id>` - Download generated workbook

### File Structure

```
tableau_ai_generator/
├── src/                          # Core Python modules
│   ├── tableau_parser.py         # TWB/TWBX parsing
│   ├── hyper_parser.py          # HYPER file parsing
│   ├── data_analyzer.py         # Data structure analysis
│   ├── pattern_recognition.py   # Pattern identification
│   ├── ai_generator.py          # AI generation engine
│   └── unified_parser.py        # Combined parsing system
├── tableau_ai_backend/          # Flask backend application
│   ├── src/
│   │   ├── main.py             # Flask application entry point
│   │   └── routes/
│   │       └── tableau_api.py  # API route definitions
│   └── requirements.txt        # Python dependencies
├── tableau_ai_frontend/         # React frontend application
│   ├── src/
│   │   ├── App.jsx            # Main React component
│   │   ├── components/        # UI components
│   │   └── hooks/             # React hooks
│   ├── package.json           # Node.js dependencies
│   └── vite.config.js         # Vite configuration
├── tests/                      # Test files and examples
├── examples/                   # Usage examples
└── docs/                      # Documentation
```

## Performance and Limitations

### Performance Metrics

- **Generation Time:** 3-5 seconds per workbook
- **File Upload:** Up to 100MB files supported
- **Concurrent Users:** Designed for multiple simultaneous users
- **API Response Time:** <500ms for most operations

### Current Limitations

- **Data Connection:** Generated workbooks require manual data source connection
- **Complex Calculations:** Advanced calculated fields may need manual adjustment
- **Custom Formatting:** Specific formatting may require manual refinement
- **Large Files:** Very large workbooks (>100MB) not supported
- **Real-time Data:** No real-time data refresh capabilities

### Future Enhancements

- Layout image analysis for visual guidance
- Advanced calculated field generation
- Real-time data source connections
- Batch workbook generation
- Custom template support
- Advanced visualization types

## Support and Maintenance

### Logs and Debugging

- **Backend Logs:** Check Flask console output
- **Frontend Logs:** Use browser developer tools console
- **API Logs:** Monitor network tab in developer tools
- **File Processing:** Check backend file processing logs

### Updates and Maintenance

- **Dependencies:** Regularly update Python and Node.js packages
- **API Keys:** Monitor OpenAI API usage and credits
- **Storage:** Clean up old generated files periodically
- **Performance:** Monitor system resource usage

### Getting Help

1. Check this user guide for common solutions
2. Review the troubleshooting section
3. Check system logs for detailed error messages
4. Verify all prerequisites are installed correctly
5. Test with simple examples first

---

**Version:** 1.0.0  
**Last Updated:** August 12, 2025  
**Compatibility:** Python 3.11+, Node.js 20+, Modern browsers

