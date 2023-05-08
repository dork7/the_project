import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from "react-error-boundary";
import Dashboard from './pages/Dashboard/index.tsx';
import Login from './pages/Auth/Login.tsx';
import Root from './pages/index.tsx';


function fallbackRender({ error, resetErrorBoundary }: any) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
)
