import { FETCH_POST, NEW_POST ,ADD } from '../action/types';

// laci  laci yang bakal di gunakan 
const initialState = {
  items: [],
  item: {},
  Count : 1,
}

export default function (state = initialState, action) {
  // sop Yang akan di gunakan 
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        items : action.payload.data
      }
      break;
    case NEW_POST:
      return {
        ...state,
        items: action.payload.data
      }
      break;
    default:
      return state;
  }
}