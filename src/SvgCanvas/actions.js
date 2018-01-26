import {EDIT_ELEMENT, HIDE_DASHBOARD} from '../main/reducer';

/*ACTION CREATORS*/
export const toggleEditing = (id) => {
  if (!id) {
    return {
      type: HIDE_DASHBOARD
    }
  }
  return {
    type: EDIT_ELEMENT,
    data: {
      id
    }
  }
}
