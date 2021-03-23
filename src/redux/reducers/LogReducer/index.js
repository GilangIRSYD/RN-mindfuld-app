const initialState = {
    listLog : []
}

const LogReducer =  (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_LOG:
        return {
          ...state,
          listLog : [...state.listLog,payload]
        };

      case DELETE_LOG:
        return {
          ...state,
          listLog : state.listLog.filter(item=>item.id !== payload)
        };

      default:
        return state;
    }
}


export const SET_LOG = "SET_LOG"
export const DELETE_LOG = "DELETE_LOG"

export default LogReducer