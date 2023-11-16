// import { width } from '@mui/system'
import './App.css'
import ErrorBoundary from './component/Error'
import MyRouter from './component/Router/MyRouters'

function App() {
  return (
    <div className='app' style={{ justifyContent: "center", alignItems: "center" }}>
      <ErrorBoundary>
      <MyRouter/>
      </ErrorBoundary>
    </div>
  )
}

export default App
