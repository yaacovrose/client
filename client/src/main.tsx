import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <App />
    </Provider>
)
