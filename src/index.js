import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
    ),
  },
  {
    path: "/profile/:id/:name",
    element: (
    <React.StrictMode>
      <Profile />
    </React.StrictMode>
    ),
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

