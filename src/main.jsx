import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/component/HOME/Home.jsx';
import Shop from './pages/Shop';
import Order from './pages/Order';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import Orderreview from './pages/Orderreview';
import Cardproductsloder from './loder/Cardproductsloder';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: Cardproductsloder,
      },
      {
        path: "/orderreview",
        element: <Orderreview></Orderreview>
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
