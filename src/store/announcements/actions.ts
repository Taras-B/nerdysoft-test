import {
  EnumAnnouncementsActionType,
  IEditAnnouncementAction,
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
  delete: (payload: number): ISetDeleteAnnouncementAction => ({
    type: EnumAnnouncementsActionType.DELETE,
    payload,
  }),
}
