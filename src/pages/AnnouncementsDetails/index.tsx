import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnnouncementById } from '../../store/announcements/selectors'
import { RootState } from '../../store/rootReducer'

export const AnnouncementsDetails = () => {
  const a = useSelector((state: RootState) => getAnnouncementById(state, '3'))
  console.log(a)

  return <div>AnnouncementsDetails</div>
}
