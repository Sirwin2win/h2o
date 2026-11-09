import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { PermissionProvider } from './components/PermissionContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PermissionProvider>
    <App />  
      </PermissionProvider>
    </Provider>
  </StrictMode>,
)
