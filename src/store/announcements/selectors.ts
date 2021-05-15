import { createSelector } from 'reselect'
import { RootState } from '../rootReducer'

export const selectAnnouncements = (state: RootState) => {
  return state.announcementsState.announcements
}

export const getAnnouncementById = (state: RootState, id: string) =>
  createSelector(selectAnnouncements, (announcements) => {
    return announcements.find((ann) => ann.id === id)
  })(state)
