import Rectangle from '../blocks/Rectangle';
import Circle from '../blocks/Circle';
import Ellipse from '../blocks/Ellipse';
import ConnectingLine from '../blocks/ConnectingLine'


/*ACTION CREATORS*/
export const addElement = (nodeName, point) => {
  return {
    type: 'ADD_ELEMENT',
    data: {nodeName, point}
  }
}


/*REDUCER*/
const blockElements = {
  rect: {
          component: Rectangle,
          properties: {
            x:15,
            y:73,
            isdragging: "true"
          }
        },
  circle: {
          component: Circle,
          properties: {
            cx:60,
            cy:218,
            isdragging: "true"
          }
        },
  ellipse: {
          component: Ellipse,
          properties: {
            cx:60,
            cy:303,
            isdragging: "true"
          }
        }
};

export const blockStore =  (state={blocks:[]}, action) => {
  switch (action.type) {
    case 'ADD_ELEMENT': {
      const newBlock = blockElements[action.data.nodeName];
      newBlock.properties.transx = action.data.point.x;
      newBlock.properties.transy = action.data.point.y;
      return {blocks: [...state.blocks, newBlock]};
    }
    default: {
      return state;
    }
  }
}
