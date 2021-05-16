import { Action } from 'redux'

export enum EnumAnnouncementsActionType {
  ADD = 'announcements/ADD_ANNOUNCEMENTS',
  EDIT = 'announcements/EDIT_ANNOUNCEMENT',
  DELETE = 'announcements/DELETE_ANNOUNCEMENTS',
  SEARCH = 'announcements/SEARCH_ANNOUNCEMENTS',
}

export interface IAnnouncement {
  id: string
  title: string
  description: string
  date: Date
}
export interface IAnnouncementsState {
  announcements: IAnnouncement[]
  searchText: string | null
}

// Action type
export type PayloadAddToAnnouncements = Omit<IAnnouncement, 'id' | 'date'>
export type PayloadEditAnnouncements = Omit<IAnnouncement, 'date'>

export interface ISetAddAnnouncementAction extends Action<EnumAnnouncementsActionType> {
  type: EnumAnnouncementsActionType.ADD
  payload: PayloadAddToAnnouncements
}
export interface IEditAnnouncementAction extends Action<EnumAnnouncementsActionType> {
  type: EnumAnnouncementsActionType.EDIT
  payload: PayloadEditAnnouncements
}

export interface ISetDeleteAnnouncementAction
  extends Action<EnumAnnouncementsActionType> {
  type: EnumAnnouncementsActionType.DELETE
  payload: string
}

// Search Announcements Action Type
export interface ISearchAnnouncementAction extends Action<EnumAnnouncementsActionType> {
  type: EnumAnnouncementsActionType.SEARCH
  payload: string
}

export type AnnouncementsActionT =
  | ISetAddAnnouncementAction
  | ISetDeleteAnnouncementAction
  | IEditAnnouncementAction
  | ISearchAnnouncementAction
