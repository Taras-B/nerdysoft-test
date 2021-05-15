import { RootState } from '../rootReducer'

export const selectAnnouncements = (state: RootState) => {
  return state.announcementsState.announcements
}
