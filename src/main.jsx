import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store'
import './index.css'
import App from './App.jsx'

// Создаем роутер с флагом future
const router = createBrowserRouter(
  [{ path: "*", Component: App }],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
