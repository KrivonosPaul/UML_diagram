import {randomId} from '../blocks/helperFunctions';
import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine'

const ADD_ELEMENT = 'ADD_ELEMENT';

/*ACTION CREATORS*/
export const addElement = (nodeName, point) => {
  let id = randomId();
  return {
    type: ADD_ELEMENT,
    data: {
      nodeName,
      point,
      id
    }
  }
}

/*REDUCER*/
export const blockStore =  (state={blocks:[]}, action) => {
  switch (action.type) {
    case ADD_ELEMENT: {
      // const newBlock = blockElements[action.data.nodeName];
      // newBlock.properties.transx = action.data.point.x;
      // newBlock.properties.transy = action.data.point.y;
      // newBlock.properties.id = action.data.id;
      return {blocks: [...state.blocks, action.data]};
    }
    default: {
      return state;
    }
  }
}
