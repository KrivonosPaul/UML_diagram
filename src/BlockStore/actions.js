import {ADD_ELEMENT} from '../main/reducer';
import {randomId} from '../blocks/helperFunctions';
import {defaultProperties} from '../blocks/defaultProperties';

const initialCoordinates = {
  rect: {
            x:15,
            y:73,
        },
  circle: {
            cx:60,
            cy:218,
        },
  ellipse: {
            cx:60,
            cy:303,
        }
}

export const addElement = (nodeName, point, indexInArray) => {
  let id = `${indexInArray}_${nodeName}_${randomId()}`;
  return {
    type: ADD_ELEMENT,
    data: {
      nodeName,
      properties: {
        ...initialCoordinates[nodeName],
        transx: point.x,
        transy: point.y,
        id,
        isdragging: 'true',
        ...defaultProperties
      },
      text: 'TEXT'
    }
  }
}
