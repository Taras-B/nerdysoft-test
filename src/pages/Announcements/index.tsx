import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { selectAnnouncements } from '../../store/announcements/selectors'
import { actionsAnnouncements } from '../../store/announcements/actions'
import { CustomForm } from '../../components/CustomForm/CustomForm'

export const Announcements: React.FC = () => {
  const dispatch = useDispatch()
  const announcements = useSelector(selectAnnouncements)

  const addAnnouncementsWithForm = useCallback(
    ({ title, description }) => {
      dispatch(actionsAnnouncements.add({ title, description }))
    },
    [dispatch]
  )
  const deletePost = useCallback(
    (id: string) => {
      dispatch(actionsAnnouncements.delete(id))
    },
    [dispatch]
  )

  return (
    <Grid container spacing={4}>
      {announcements.map((post) => (
        <Grid item xs={12} key={post.id}>
          <Paper elevation={7} style={{ padding: 10 }}>
            <Grid container spacing={1} alignItems='center'>
              <Grid item xs={12} md={10}>
                <Typography variant='h6'>{post.title}</Typography>
                <Typography>{post.description}</Typography>
              </Grid>
              <Grid container alignItems='center' item xs={12} md={2}>
                <Grid item xs={6} md={6}>
                  <Button color='secondary' onClick={() => deletePost(post.id)}>
                    delete
                  </Button>
                </Grid>
                <Grid container justify='flex-end' item xs={6} md={6}>
                  <Link to={`/announcements/${post.id}`}>
                    <Button color='primary'>more...</Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}

      <Grid container justify='center' item>
        <CustomForm buttonName='Add' addPost={addAnnouncementsWithForm} />
      </Grid>
    </Grid>
  )
}
