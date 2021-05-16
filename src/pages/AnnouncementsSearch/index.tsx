import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import { getSearchAnnouncements } from '../../store/announcements/selectors'
import { actionsAnnouncements } from '../../store/announcements/actions'

import { AnnouncementItem } from '../../components/AnnouncementItem/AnnouncementItem'

export const AnnouncementsSearch: React.FC = () => {
  const dispatch = useDispatch()

  const announcementsSearch = useSelector(getSearchAnnouncements)

  const deleteAnnouncement = useCallback(
    (id: string) => {
      dispatch(actionsAnnouncements.delete(id))
    },
    [dispatch]
  )
  if (!announcementsSearch || announcementsSearch.length === 0)
    return <div> no yet this announcement</div>

  return (
    <Grid container spacing={4}>
      {announcementsSearch.map((post) => (
        <AnnouncementItem
          deleteAnnouncement={deleteAnnouncement}
          title={post.title}
          description={post.description}
          key={post.id}
          id={post.id}
        />
      ))}
    </Grid>
  )
}
