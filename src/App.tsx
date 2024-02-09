import './App.css'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRoutes } from './Routes/Routes'

function App () {
  return (
    <AuthProvider>
      <BrowserRoutes />
    </AuthProvider>
  )
}

export default App
