import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/navigation/Routes'
import { AlbumProvider } from './src/context/AlbumContext'







const App = () => {
  return (
    <AlbumProvider>
      <Routes />
    </AlbumProvider>
  )
}

export default App