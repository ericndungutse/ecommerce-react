import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './pages/Root';
import AuthProtect from './utils/AuthProtect.js';

import './App.css';

// Pages
import HomePage from './pages/home/homepage';
import Shop from './pages/shop/Shop';
import Auth from './pages/auth/Auth';

const rooter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path='shop' element={<Shop />} />
      <Route
        path='signin'
        element={
          <AuthProtect>
            <Auth />
          </AuthProtect>
        }
      />
    </Route>
  )
);

export default rooter;
