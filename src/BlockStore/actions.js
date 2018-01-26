import {ADD_ELEMENT} from '../main/reducer';
import {randomId} from '../blocks/helperFunctions';

export const addElement = (nodeName, point) => {
  let id = randomId();
  return {
    type: ADD_ELEMENT,
    data: {
      nodeName,
      properties: {
        transx: point.x,
        transy: point.y,
        id,
        isdragging: 'true'
      }
    }
  }
}
