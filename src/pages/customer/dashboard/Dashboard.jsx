import React from 'react'
import ReactDOM from 'react-dom/client';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import App from './App.jsx'
const Dashboard = () => {
  return (
    <div>
        <React.StrictMode>
        <GlobalStyle />
          <GlobalProvider>
            <br /><br />
            <App />
          </GlobalProvider>
      </React.StrictMode>   
   </div>
  )
}

export default Dashboard