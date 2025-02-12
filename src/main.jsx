import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Error404 from './components/Pages/Error404.jsx'
import './index.css'
import Login from './components/Pages/Authentication/Login.jsx'
import Error500 from './components/Pages/Error500.jsx'
import UserDashboard from './components/Pages/UserDashboard.jsx'
import Maintenance from './components/Pages/Maintenance.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error404 />}>
      <Route index element={<App />} />
      <Route path="error404" element={<Error404 />} />
      <Route path="error500" element={<Error500 />} />
      <Route path="login" element={<Login />} />
      <Route path="userdashboard" element={<UserDashboard />} />
      <Route path='maintenance' element={<Maintenance />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)