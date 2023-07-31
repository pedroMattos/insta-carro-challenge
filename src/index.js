import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
    ),
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

