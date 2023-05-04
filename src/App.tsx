import './App.css'
import User from './components/Context/User'
import { UserContextProvider } from './components/Context/UserContext'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Dashboard />
    </ >
  )
}

export default App
