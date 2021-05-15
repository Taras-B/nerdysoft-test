import React from 'react'

import './App.css'
import { Container } from '@material-ui/core'

import { Header } from './components/Header/Header'
import { Announcements } from './pages/Announcements'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Container maxWidth='md'>
        <Announcements />
      </Container>
    </div>
  )
}

export default App
