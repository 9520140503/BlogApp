import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {AuthLayout} from "./Components"
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Login from './pages/Login.jsx'
import Posts from './pages/Posts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[{
      path: '/',
      element: <Home/>
    },
    {
      path: '/signup',
      element: <AuthLayout authentication={false}>
                  <SignUp />
              </AuthLayout>
    },
    {
      path: '/login',
      element: <AuthLayout authentication={false}>
                  <Login />
              </AuthLayout>
    },
    {
      path: '/all-posts',
      element: <AuthLayout authentication={true}>
                  <AllPosts />
              </AuthLayout>
    },
    {
      path: '/create-post',
      element: <AuthLayout authentication={true}>
                  <AddPost />
              </AuthLayout>
    },
    {
      path: 'edit-post/:slug',
      element: <AuthLayout authentication={true}>
                  <EditPost />
              </AuthLayout>
    },
    {
      path:'/posts/:slug',
      element: <AuthLayout authentication={true}>
                <Posts/>
      </AuthLayout>
    }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/> 
    </Provider>
  </StrictMode>,
)
            