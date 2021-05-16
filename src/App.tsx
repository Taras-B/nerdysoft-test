import React from 'react'

import './App.css'
import { Container } from '@material-ui/core'

import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Announcements } from './pages/Announcements'
import { AnnouncementDetails } from './pages/AnnouncementDetails'
import { AnnouncementsSearch } from './pages/AnnouncementsSearch'

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
          <Route exact path='/search' component={AnnouncementsSearch} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
