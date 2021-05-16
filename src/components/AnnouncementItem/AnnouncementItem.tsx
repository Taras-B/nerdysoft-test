import React from 'react'

import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

interface IProps {
  id: string
  title: string
  description: string
  deleteAnnouncement: (id: string) => void
}

export const AnnouncementItem = ({
  title,
  id,
  description,
  deleteAnnouncement,
}: IProps) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={7} style={{ padding: 10 }}>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={12} md={10}>
            <Typography variant='h6'>{title}</Typography>
            <Typography>{description}</Typography>
          </Grid>
          <Grid container alignItems='center' item xs={12} md={2}>
            <Grid item xs={6} md={6}>
              <Button color='secondary' onClick={() => deleteAnnouncement(id)}>
                delete
              </Button>
            </Grid>
            <Grid container justify='flex-end' item xs={6} md={6}>
              <Link to={`/announcement/${id}`}>
                <Button color='primary'>more...</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
