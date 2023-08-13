import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ErrorBoundary } from "react-error-boundary";
import { theme } from './config/theme.ts';
import { UserContextProvider } from './contexts/user.context.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CategoriesContextProvider } from './contexts/product.context.tsx';
import { CartContextProvider } from './contexts/cart.context.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

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

      <ThemeProvider theme={theme}>
        <ErrorBoundary fallbackRender={fallbackRender}>
          <BrowserRouter>
            <UserContextProvider>
              <CartContextProvider>
                <CategoriesContextProvider>
                  <App />
                </CategoriesContextProvider>
              </CartContextProvider>
            </UserContextProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
