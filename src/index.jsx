import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "@asgardeo/auth-react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider
        config={ {
            signInRedirectURL: `${import.meta.env.VITE_REACT_APP_BASE_URL}`,
            signOutRedirectURL: `${import.meta.env.VITE_REACT_APP_BASE_URL}`,
            clientID: `${import.meta.env.VITE_REACT_APP_CLIENT_ID}`,
            baseUrl: `${import.meta.env.VITE_REACT_APP_ASGARDEO_BASE_URL}`,
            scope: [ "openid","profile" ]
        } }
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </AuthProvider>
)
