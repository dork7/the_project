import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { theme } from './config/theme.ts';
import './index.css';
import { persistor, store } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react'

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
    <Provider store={store}>
      <PersistGate loading={<div>Loading....</div>} persistor={persistor} >
        <ThemeProvider theme={theme}>
          <ErrorBoundary fallbackRender={fallbackRender}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ErrorBoundary>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode >,
)
