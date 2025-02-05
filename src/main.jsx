import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Error404 from './components/Pages/Error404.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error404 />}>
      <Route index element={<App />} />
      <Route path="error404" element={<Error404 />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)