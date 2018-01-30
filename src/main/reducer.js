export const ADD_ELEMENT = 'ADD_ELEMENT';
export const EDIT_ELEMENT = 'EDIT_ELEMENT';
export const HIDE_DASHBOARD = 'HIDE_DASHBOARD';
export const SET_CURRENT_DRAGGING = 'SET_CURRENT_DRAGGING';
export const MOVING_ELEMENT = 'MOVING_ELEMENT';
export const STOP_DRAGGING = 'STOP_DRAGGING';
export const CHANGE_STROKE_COLOR = 'CHANGE_STROKE_COLOR';
export const CHANGE_FILL_COLOR = 'CHANGE_FILL_COLOR';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const DELETE_BLOCK = 'DELETE_BLOCK';
export const SET_POINTS_FOR_LINE = 'SET_POINTS_FOR_LINE';

export const reducer =  (state, action) => {
  switch (action.type) {
    case ADD_ELEMENT: {
      const newState = {...state};
      newState.blocks = [...newState.blocks, action.data]
      newState.currentDragging = newState.blocks.length - 1;
      return newState;
    }
    case EDIT_ELEMENT: {
      const newState = {...state};
      newState.currentEditing = action.data.index;
      return newState;
    }
    case HIDE_DASHBOARD: {
      return {...state, currentEditing: -1};
    }
    case SET_CURRENT_DRAGGING: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.currentDragging = action.data.index;
      newState.blocks[action.data.index].properties.transx = action.data.point.x;
      newState.blocks[action.data.index].properties.transy = action.data.point.y;
      return newState;
    }
    case MOVING_ELEMENT: {
      if (~state.currentDragging) {
        const newState = JSON.parse(JSON.stringify(state));
        const current = newState.blocks[state.currentDragging];
        current.properties.transform = `translate(${action.data.point.x - current.properties.transx}, ${action.data.point.y - current.properties.transy})`;
        return newState;
      }
      return state;
    }
    case STOP_DRAGGING: {
      if (~state.currentDragging) {
        const newState = JSON.parse(JSON.stringify(state));
        const current = newState.blocks[state.currentDragging];
        if (current.properties.x) {
          current.properties.x = parseInt(action.data.point.x) - parseInt(current.properties.transx) + parseInt(current.properties.x);
          current.properties.y = parseInt(action.data.point.y) - parseInt(current.properties.transy) + parseInt(current.properties.y);
        } else {
          current.properties.cx = parseInt(action.data.point.x) - parseInt(current.properties.transx) + parseInt(current.properties.cx);
          current.properties.cy = parseInt(action.data.point.y) - parseInt(current.properties.transy) + parseInt(current.properties.cy);
        }
        delete current.properties.transform;
        delete current.properties.isdragging;
        newState.currentDragging = -1;
        return newState;
      }
      return state;
    }
    case CHANGE_STROKE_COLOR: {
      const newState = JSON.parse(JSON.stringify(state));
      if (~state.currentEditing) {
        const current = newState.blocks[state.currentEditing];
        current.properties.stroke = action.data.stroke;
      }
      return newState;
    }
    case CHANGE_FILL_COLOR: {
      const newState = JSON.parse(JSON.stringify(state));
      if (~state.currentEditing) {
        const current = newState.blocks[state.currentEditing];
        current.properties.fill = action.data.fill;
      }
      return newState;
    }
    case CHANGE_TEXT: {
      const newState = JSON.parse(JSON.stringify(state));
      if (~state.currentEditing) {
        const current = newState.blocks[state.currentEditing];
        current.text = action.data.text;
      }
      return newState;
    }
    case DELETE_BLOCK: {
      const newState = JSON.parse(JSON.stringify(state));
      if (~state.currentEditing) {
        const current = newState.blocks[state.currentEditing];
        current.isdeleted = 'true';
        newState.currentEditing = -1;
      }
      return newState;
    }
    case SET_POINTS_FOR_LINE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.isSettingLinesPoints = action.data.id;
      return newState;
    }
    case PAINTING_LINE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.isSettingLinesPoints = {...state.isSettingLinesPoints, action.data.point};
      return newState;
    }
    default: {
      return state;
    }
  }
}
