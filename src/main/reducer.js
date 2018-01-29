export const ADD_ELEMENT = 'ADD_ELEMENT';
export const EDIT_ELEMENT = 'EDIT_ELEMENT';
export const HIDE_DASHBOARD = 'HIDE_DASHBOARD';
export const SET_CURRENT_DRAGGING = 'SET_CURRENT_DRAGGING';
export const MOVING_ELEMENT = 'MOVING_ELEMENT';
export const STOP_DRAGGING = 'STOP_DRAGGING';

/*REDUCER*/
export const reducer =  (state, action) => {
  switch (action.type) {
    case ADD_ELEMENT: {
      const newState = {...state};
      newState.blocks = [...newState.blocks, action.data]
      return newState;
    }
    case EDIT_ELEMENT: {
      const newState = {...state};
      newState.currentEditing = action.data.index;
      // newState.blocks.map((elem, id)=>{
      //   if (elem.properties.id === action.data.id) {
      //     newState.currentEditing = id;
      //   }
      // });
      return newState;
    }
    case HIDE_DASHBOARD: {
      return {...state, currentEditing: -1};
    }
    case SET_CURRENT_DRAGGING: {
      const newState = {...state};
      newState.currentDragging = action.data.index;
      newState.blocks[action.data.index].properties.transx = action.data.point.x;
      newState.blocks[action.data.index].properties.transy = action.data.point.y;
      return newState;
    }
    case MOVING_ELEMENT: {
      if (~state.currentDragging) {
        const newState = {...state};
        const current = newState.blocks[state.currentDragging];
        current.transform = `translate(${action.data.point.x - current.properties.transx}, ${action.data.point.y - current.properties.transy})`;
        return newState;
      }
    }
    case STOP_DRAGGING: {
      if (~state.currentDragging) {
        const newState = {...state};
        const current = newState.blocks[state.currentDragging];
        current.properties.x = action.data.point.x - parseInt(current.properties.transx) + parseInt(current.properties.x);
        current.properties.y = action.data.point.y - parseInt(current.properties.transy) + parseInt(current.properties.y);
        current.transform = '';
        newState.currentDragging = -1;
        return newState;
      }
    }
    default: {
      return state;
    }
  }
}
