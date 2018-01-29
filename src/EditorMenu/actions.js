import {CHANGE_STROKE_COLOR, CHANGE_FILL_COLOR, CHANGE_TEXT, DELETE_BLOCK} from '../main/reducer';

export const changeStrokeColor = (stroke) => {
  return {
    type: CHANGE_STROKE_COLOR,
    data: {
      stroke
    }
  };
};

export const changeFillColor = (fill) => {
  return {
    type: CHANGE_FILL_COLOR,
    data: {
      fill
    }
  };
};

export const changeText = (text) => {
  return {
    type: CHANGE_TEXT,
    data: {
      text
    }
  };
};

export const deleteBlock = () => {
  return {
    type: DELETE_BLOCK
  }
}
