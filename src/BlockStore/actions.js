import {ADD_ELEMENT} from '../main/reducer';
import {randomId} from '../blocks/helperFunctions';
import {defaultProperties} from '../blocks/defaultProperties';

const initialCoordinates = (offset) => ({
  rect: {
            x: 15 + offset.x,
            y: 73 + offset.y
        },
  circle: {
            cx:60 + offset.x,
            cy:218 + offset.y
        },
  ellipse: {
            cx:60 + offset.x,
            cy:303 + offset.y
        }
});

export const addElement = (nodeName, point, indexInArray) => {
  const id = `${indexInArray}_${nodeName}_${randomId()}`;
  const initPos = initialCoordinates({
    x: document.documentElement.scrollLeft,
    y: document.documentElement.scrollTop
  })[nodeName];
  return {
    type: ADD_ELEMENT,
    data: {
      nodeName,
      properties: {
        ...initPos,
        transx: point.x,
        transy: point.y,
        id,
        isdragging: 'true',
        ...defaultProperties
      },
      text: ''
    }
  }
}
