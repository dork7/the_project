import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from "react-error-boundary";
import Login from './pages/Auth/Login.tsx';
import Dashboard from './pages/Dashboard/index.tsx';
import Root from './pages/index.tsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './config/theme.ts';
import { Checkbox } from '@mui/material';
import App from './App.tsx';


function fallbackRender({ error, resetErrorBoundary }: any) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
)
