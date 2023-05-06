import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';
import NavBar from './components/Nav/NavBar';
import { ErrorBoundary } from "react-error-boundary";


function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      // children: [
      //   {
      //     path: "/login",
      //     element: <Login />,
      //   },
      // ],
    },

    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <ErrorBoundary fallbackRender={fallbackRender}>

        <RouterProvider router={router} />
      </ErrorBoundary>
    </ >
  )
}

export default App
