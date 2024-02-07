import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  PATH_CATEGORY,
  PATH_CONFIG,
  PATH_CONVOCATORY,
  PATH_IDEA,
  PATH_LOGIN,
  PATH_PROJECTS,
  PATH_ROOT,
  PATH_SIGN_UP,
  PATH_THIRD_PARTIES
} from '../constants/routePaths'
import {
  Category,
  Config,
  Convocatory,
  Home,
  Idea,
  Login,
  Projects,
  SignUp,
  ThirdParties
} from '../pages'
import { Page404 } from '../pages/Page404'
import { LoginLayout, MainLayout } from '../layout'
import { AuthContext } from '../context/authProvider'
import { useContext, useEffect } from 'react'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
export const BrowserRoutes = () => {
  const { user, checkingCredentials } = useContext(AuthContext)
  useEffect(() => {
    checkingCredentials()
  }, [])
  if (user.status === 'checking') {
    return <h1>Cargando...</h1>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRoute>
              <LoginLayout />
            </PublicRoute>
          }
        >
          <Route path={PATH_LOGIN} element={<Login />} />
          <Route path={PATH_SIGN_UP} element={<SignUp />} />
        </Route>
        <Route
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route path={PATH_ROOT} element={<Home />} />
          <Route path={PATH_CONFIG} element={<Config />} />
          <Route path={PATH_CATEGORY} element={<Category />} />
          <Route path={PATH_CONVOCATORY} element={<Convocatory />} />
          <Route path={PATH_IDEA} element={<Idea />} />
          <Route path={PATH_PROJECTS} element={<Projects />} />
          <Route path={PATH_THIRD_PARTIES} element={<ThirdParties />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
