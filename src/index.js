import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import store from './store/store'
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <React.StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.StrictMode>
    ),
  },
  {
    path: "/profile/:id",
    element: (
    <React.StrictMode>
      <Provider store={store}>
        <Profile />
      </Provider>
    </React.StrictMode>
    ),
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

