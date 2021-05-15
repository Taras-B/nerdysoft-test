import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import { getAnnouncementById } from '../../store/announcements/selectors'
import { RootState } from '../../store/rootReducer'
import { CustomForm } from '../../components/CustomForm/CustomForm'
import { actionsAnnouncements } from '../../store/announcements/actions'

export const AnnouncementDetails: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const { announcementId } = useParams<{ announcementId: string }>()
  const dispatch = useDispatch()

  const announcement = useSelector((state: RootState) =>
    getAnnouncementById(state, announcementId)
  )

  const editAnnouncement = useCallback(
    ({ title, description }) => {
      dispatch(actionsAnnouncements.edit({ title, description, id: announcementId }))
      setOpen(false)
    },
    [dispatch, announcementId]
  )

  if (!announcement) return <div> no yet this announcement</div>

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Paper elevation={7} style={{ padding: 10 }}>
          <Grid container spacing={1} alignItems='center'>
            <Grid item xs={12}>
              <Typography variant='h6'>{announcement.title}</Typography>
              <Divider />
              <Typography>{announcement.description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant='outlined' color='primary' onClick={() => setOpen(!open)}>
                {open ? <>Close form</> : <>Open edit form</>}
              </Button>
            </Grid>
          </Grid>
          {open && (
            <Grid container justify='center' item>
              <CustomForm
                buttonName='Edit'
                addPost={editAnnouncement}
                title={announcement.title}
                description={announcement.description}
              />
            </Grid>
          )}
        </Paper>
      </Grid>
    </Grid>
  )
}
