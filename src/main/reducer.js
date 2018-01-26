export const ADD_ELEMENT = 'ADD_ELEMENT';
export const EDIT_ELEMENT = 'EDIT_ELEMENT';
export const HIDE_DASHBOARD = 'HIDE_DASHBOARD';


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
      newState.blocks.map((elem, id)=>{
        if (elem.properties.id === action.data.id) {
          newState.currentIndex = id;
        }
      });
      return newState;
    }
    case HIDE_DASHBOARD: {
      return {...state, currentIndex: -1};
    }
    default: {
      return state;
    }
  }
}
