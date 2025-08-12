import React, { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState(null)
  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      setAnalysis(null)
    }
  }

  const analyzeWorkbook = async () => {
    if (!file) return

    setLoading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      setAnalysis(data)
    } catch (error) {
      console.error('Error analyzing workbook:', error)
      alert('Error analyzing workbook. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Tableau AI Generator</h1>
        <p>Upload and analyze Tableau workbooks with AI</p>
      </header>

      <main className="app-main">
        <div className="upload-section">
          <h2>Upload Tableau Workbook</h2>
          <input
            type="file"
            accept=".twb,.twbx"
            onChange={handleFileUpload}
            className="file-input"
          />
          {file && (
            <div className="file-info">
              <p>Selected file: {file.name}</p>
              <button 
                onClick={analyzeWorkbook} 
                disabled={loading}
                className="analyze-button"
              >
                {loading ? 'Analyzing...' : 'Analyze Workbook'}
              </button>
            </div>
          )}
        </div>

        {analysis && (
          <div className="analysis-section">
            <h2>Analysis Results</h2>
            <pre className="analysis-results">
              {JSON.stringify(analysis, null, 2)}
            </pre>
          </div>
        )}
      </main>
    </div>
  )
}

export default App