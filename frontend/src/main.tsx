import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import ErrorPage from './ErrorPage.tsx'
import './index.css'
import OverviewPage from './OverviewPage.tsx'
import TrackPage from './TrackPage.tsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<OverviewPage />} />
    <Route path='track/' element={<TrackPage />} />
  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
