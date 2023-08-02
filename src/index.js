import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <React.StrictMode>
      <Provider store={store.store}>
        <Home />
      </Provider>
    </React.StrictMode>
    ),
  },
  {
    path: "/profile/:id",
    element: (
    <React.StrictMode>
      <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Profile />
      </PersistGate>
      </Provider>
    </React.StrictMode>
    ),
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

