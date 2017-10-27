
const INITIAL_STATE = {}
const flowReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPLOAD_IMAGE':
      return {
        ...state,
        inputId: action.inputId
      };
      break;
    default: return state

  }
}

export default flowReducer;
