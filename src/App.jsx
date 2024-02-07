import { BrowserRoutes } from './Routes/routes'
import { AuthProvider } from './context/authProvider'

function App () {
  return (
    <AuthProvider>
      <BrowserRoutes />
    </AuthProvider>
  )
}

export default App
