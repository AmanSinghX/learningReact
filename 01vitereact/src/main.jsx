import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// trying to declare a function here
function MyApp() {
  return (
    <div>
      <h1>Custom App! </h1>
    </div>
  )
} 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
