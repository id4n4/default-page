import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PATH_LOGIN, PATH_ROOT, PATH_SIGN_UP } from '../constants/routePaths'
import { Home, Login, SignUp } from '../pages'
import { Page404 } from '../pages/Page404'
import { LoginLayout, MainLayout } from '../layout'
export const BrowserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path={PATH_LOGIN} element={<Login />} />
          <Route path={PATH_SIGN_UP} element={<SignUp />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path={PATH_ROOT} element={<Home />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
