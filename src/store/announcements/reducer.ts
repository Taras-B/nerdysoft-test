import {
  AnnouncementsActionT,
  EnumAnnouncementsActionType,
  IAnnouncementsState,
} from './types'

const initialState: IAnnouncementsState = {
  announcements: [
    {
      id: 1,
      title: ' Why do we use it? ',
      description: ' It is sj a long. ',
      date: new Date(),
    },
    {
      id: 2,
      title: ' What is Lorem Ipsum? ',
      description: 'Lorem7777  88554 Lorem Ipsum  ',
      date: new Date(),
    },
    {
      id: 3,
      title: ' Why Learn ReactJS? ',
      description: ' React  offers ',
      date: new Date(),
    },
    {
      id: 4,
      title: ' What is Lorem Ipsum ',
      description: ' Lore dfg dfg dfg  Ipsum ',
      date: new Date(),
    },
    {
      id: 5,
      title: ' What is Lorem Ipsum ',
      description: ' Lo777rem Ipsum ',
      date: new Date(),
    },
  ],
}

export const announcementsReducer = (
  state = initialState,
  action: AnnouncementsActionT
): IAnnouncementsState => {
  switch (action.type) {
    case EnumAnnouncementsActionType.EDIT:
      return {
        ...state,
        announcements: state.announcements.map((ann) => {
          if (ann.id === action.payload.id) {
            return {
              ...ann,
              title: action.payload.title,
              description: action.payload.description,
            }
          }
          return ann
        }),
      }
    case EnumAnnouncementsActionType.ADD:
      return {
        ...state,
        announcements: [
          ...state.announcements,
          { ...action.payload, id: 3, date: new Date() },
        ],
      }
    case EnumAnnouncementsActionType.DELETE:
      return {
        ...state,
        announcements: state.announcements.filter((ann) => ann.id !== action.payload),
      }

    default:
      return state
  }
}
