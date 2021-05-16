import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { actionsAnnouncements } from '../../store/announcements/actions'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  title: {
    'display': 'flex',
    'flexDirection': 'row',
    '& h6': {
      marginRight: '10px',
    },
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  },
  navLinkActive: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px',
    borderRadius: '7px',
  },
})

export const Header: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      searchText: '',
    },
    onSubmit: (values) => {
      dispatch(actionsAnnouncements.setSearch(values.searchText))
      history.push('/search')
    },
  })

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Grid container direction='row' spacing={4} alignItems='center'>
            <Grid item xs={12} md={7} className={classes.title}>
              <Typography variant='h6'>
                <NavLink
                  activeClassName={classes.navLinkActive}
                  className={classes.navLink}
                  exact
                  to='/'>
                  Home
                </NavLink>
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container justify='center' alignItems='center'>
                  <Grid item xs={8}>
                    <TextField
                      onChange={formik.handleChange}
                      value={formik.values.searchText}
                      label='Search'
                      name='searchText'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button color='inherit' type='submit'>
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
