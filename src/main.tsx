import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from "react-error-boundary";
import Login from './pages/Auth/Login.tsx';
import Dashboard from './pages/Dashboard/index.tsx';
import SASS from './pages/SASS/index.tsx';
import TestPage from './pages/TestPage/index.tsx';


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
    element: <Dashboard />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/test-page",
        element: <TestPage />,
      },
      {
        path: "/sass",
        element: <SASS />,
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
