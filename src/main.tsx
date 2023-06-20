import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ErrorBoundary } from "react-error-boundary";
import { theme } from './config/theme.ts';
import { UserContextProvider } from './contexts/user.context.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ProductsContextProvider } from './contexts/product.context.tsx';


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
          <UserContextProvider>
            <ProductsContextProvider>
              <App />
            </ProductsContextProvider>
          </UserContextProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
)
