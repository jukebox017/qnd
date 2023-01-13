import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import BarChart from './BarChart/BarChart';
import Swapi from './Swapi';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "bar-chart",
    element: <BarChart />
  },
  {
    path: "star-wars",
    element: <Swapi />
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1 style={{backgroundColor: '#282c34', margin: 0, color: 'white'}}>React-vis Demo</h1>
    <RouterProvider router={router} />
  </React.StrictMode>
);
