import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Persistor, Store } from './src/redux/Store'
import Router from './src/Router'

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
