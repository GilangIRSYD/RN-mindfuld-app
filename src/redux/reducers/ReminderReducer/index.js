const initialState = {
  listReminder: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_REMINDER:
      return {
        ...state,
        listReminder: [...state.listReminder, payload],
      };

    case DELETE_REMINDER:
      return {
        ...state,
        listReminder: state.listReminder.filter(item=>item.id !== payload),
      };
    default:
      return state;
  }
};

export const SET_REMINDER = 'SET_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
