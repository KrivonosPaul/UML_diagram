import {EDIT_ELEMENT,
  HIDE_DASHBOARD,
  SET_CURRENT_DRAGGING,
  MOVING_ELEMENT,
  STOP_DRAGGING,
  PAINTING_LINE} from '../main/reducer';

/*ACTION CREATORS*/
export const toggleEditing = (elementId) => {
  if (!elementId) {
    return {
      type: HIDE_DASHBOARD
    }
  }
  return {
    type: EDIT_ELEMENT,
    data: {
      index: elementId.split('_')[0]
    }
  }
}

export const mouseDownOnSVG = (elementId, point) => {
  return {
    type: SET_CURRENT_DRAGGING,
    data: {
      index: elementId.split('_')[0],
      point
    }
  };
}

export const mouseMoveOnSVG = (point) => {
  return {
    type: MOVING_ELEMENT,
    data: {
      point
    }
  };
}

export const mouseUpOnSVG = (elementId, point) => {
  return {
    type: STOP_DRAGGING,
    data: {
      index: elementId.split('_')[0],
      point
    }
  };
}

export const setInitialLinePoints = (point, isEnd) => {
  return {
    type: PAINTING_LINE,
    data: {
      point,
      isEnd
    }
  };
}
