import React from 'react'

import './App.css'
import { Container } from '@material-ui/core'

import { Header } from './components/Header/Header'
import { Announcements } from './pages/Announcements'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { AnnouncementDetails } from './pages/AnnouncementDetails'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Container maxWidth='md'>
        <Switch>
          <Route exact path='/' component={Announcements} />

          <Route
            exact
            path='/announcement/:announcementId'
            component={AnnouncementDetails}
          />
        </Switch>
      </Container>
    </div>
  )
}

export default App
