import { createSelector } from 'reselect'
import { RootState } from '../rootReducer'

export const selectAnnouncements = (state: RootState) => {
  return state.announcementsState.announcements
}
export const selectSearchText = (state: RootState) => {
  return state.announcementsState.searchText
}

export const getAnnouncementById = (state: RootState, id: string) =>
  createSelector(selectAnnouncements, (announcements) => {
    return announcements.find((ann) => ann.id === id)
  })(state)

export const getSearchAnnouncements = createSelector(
  selectAnnouncements,
  selectSearchText,
  (announcements, text) => {
    return (
      text &&
      announcements.filter((ann) => ann.title.toLowerCase().includes(text!.toLowerCase()))
    )
  }
)
