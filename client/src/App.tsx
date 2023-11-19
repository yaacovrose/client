import './App.css'
import ErrorBoundary from './component/Error'
import MyRouter from './component/Router/MyRouters'
import { connectToData } from './component/functions'

function App() {
  connectToData()
  return (
    <div className='app' style={{ justifyContent: "center", alignItems: "center" }}>
      <ErrorBoundary>
      <MyRouter />
      </ErrorBoundary>
    </div>
  )
}

export default App
