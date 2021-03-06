import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import { selectAnnouncements } from '../../store/announcements/selectors'
import { actionsAnnouncements } from '../../store/announcements/actions'
import { CustomForm } from '../../components/CustomForm/CustomForm'
import { AnnouncementItem } from '../../components/AnnouncementItem/AnnouncementItem'

export const Announcements: React.FC = () => {
  const dispatch = useDispatch()
  const announcements = useSelector(selectAnnouncements)

  const addAnnouncementsWithForm = useCallback(
    ({ title, description }) => {
      dispatch(actionsAnnouncements.add({ title, description }))
    },
    [dispatch]
  )
  const deleteAnnouncement = useCallback(
    (id: string) => {
      dispatch(actionsAnnouncements.delete(id))
    },
    [dispatch]
  )

  return (
    <Grid container spacing={4}>
      {announcements.map((post) => (
        <AnnouncementItem
          deleteAnnouncement={deleteAnnouncement}
          title={post.title}
          description={post.description}
          key={post.id}
          id={post.id}
        />
      ))}

      <Grid container justify='center' item>
        <CustomForm buttonName='Add' addPost={addAnnouncementsWithForm} />
      </Grid>
    </Grid>
  )
}
