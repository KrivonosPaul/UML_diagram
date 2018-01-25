// onMouseDown: (evt) => onMouseDownHandler(evt),
// onMouseMove: (evt) => onMouseMoveHandler(evt),
// onMouseUp: (evt) => onMouseUpHandler(evt),
// onMouseLeave: (evt) => onMouseLeaveHandler(evt),
// onClick: (evt) => onClickHandler(evt)


const UPDATE_ELEMENT_POSITION = 'UPDATE_ELEMENT_POSITION';
/*ACTION CREATORS*/
export const updateBlockPosition = (blockId, positionPoint) => {
  return {
    type: UPDATE_ELEMENT_POSITION,
    data: {blockId, positionPoint}
  }
}


/*REDUCER*/
export const blockStore =  (state={blocks:[]}, action) => {
  switch (action.type) {
    case UPDATE_ELEMENT_POSITION: {
      
      return {blocks: [...state.blocks, newBlock]};
    }
    default: {
      return state;
    }
  }
}
