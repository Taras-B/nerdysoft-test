import {
  EnumAnnouncementsActionType,
  IEditAnnouncementAction,
  ISearchAnnouncementAction,
  ISetAddAnnouncementAction,
  ISetDeleteAnnouncementAction,
  PayloadAddToAnnouncements,
  PayloadEditAnnouncements,
} from './types'

export const actionsAnnouncements = {
  edit: (payload: PayloadEditAnnouncements): IEditAnnouncementAction => ({
    type: EnumAnnouncementsActionType.EDIT,
    payload,
  }),
  add: (payload: PayloadAddToAnnouncements): ISetAddAnnouncementAction => ({
    type: EnumAnnouncementsActionType.ADD,
    payload,
  }),
  delete: (payload: string): ISetDeleteAnnouncementAction => ({
    type: EnumAnnouncementsActionType.DELETE,
    payload,
  }),
  setSearch: (payload: string): ISearchAnnouncementAction => ({
    type: EnumAnnouncementsActionType.SEARCH,
    payload,
  }),
}
