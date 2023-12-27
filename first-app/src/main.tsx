import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import Contact from './pages/Contact.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ContactDetails from './pages/ContactDetails.tsx'
import Items from './pages/Items.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/items",
        element: <Items/>
      },
      {
        path:"/contact/:id",
        element: <ContactDetails/>
      }
    ]  
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
