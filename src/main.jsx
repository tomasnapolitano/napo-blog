import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Index from './components/Index/Index.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Index/>,
      },
      {
        path: "boludez",
        element: <div>boludez</div>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
