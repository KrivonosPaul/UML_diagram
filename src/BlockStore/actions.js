import {ADD_ELEMENT} from '../main/reducer';
import {randomId} from '../blocks/helperFunctions';
import {defaultProperties} from '../blocks/defaultProperties';


export const addElement = (nodeName, point, indexInArray) => {
  let id = `${indexInArray}_${nodeName}_${randomId()}`;
  return {
    type: ADD_ELEMENT,
    data: {
      nodeName,
      properties: {
        transx: point.x,
        transy: point.y,
        id,
        isdragging: 'true',
        ...defaultProperties
      }
    }
  }
}
