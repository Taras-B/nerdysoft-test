import { combineReducers } from 'redux'
import { announcementsReducer } from './announcements/reducer'
import { IAnnouncementsState } from './announcements/types'

export const rootReducer = combineReducers({
  announcementsState: announcementsReducer,
})

export type RootState = {
  announcementsState: IAnnouncementsState
}
