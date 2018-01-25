

export const reassignDefault = (def, actual) => {
  const propsToReturn = {...def};
  Object.keys(propsToReturn).forEach((elem) => {
    if(actual[elem]){
      propsToReturn[elem] = actual[elem];
    }
  });
  Object.keys(actual).forEach((elem) => {
    if(!propsToReturn[elem]){
      propsToReturn[elem] = actual[elem];
    }
  });
  return propsToReturn;
};


export const defaulAttributesFabrick = () => ({
  fillOpacity: '0.3',
  fill: "#ffffff",
  strokeLinejoin: "round",
  strokeLinecap: "round",
  strokeOpacity: '1',
  stroke: "#000000",
  strokeWidth: '1',
  onMouseDown: (evt) => onMouseDownHandler(evt),
  onMouseMove: (evt) => onMouseMoveHandler(evt),
  onMouseUp: (evt) => onMouseUpHandler(evt),
  onMouseLeave: (evt) => onMouseLeaveHandler(evt),
  onClick: (evt) => onClickHandler(evt)
});

const onMouseDownHandler = (evt) => {
  evt.target.setAttribute('isdragging', true);
  if (!evt.target.getAttribute('transx') && !evt.target.getAttribute('transy')) {
    evt.target.setAttribute('transx', evt.clientX);
    evt.target.setAttribute('transy', evt.clientY);
  }
};
const onMouseMoveHandler = (evt) => {
  if (evt.target.getAttribute('isdragging')) {
    evt.target.setAttribute('transform',
    `translate(${evt.clientX - evt.target.getAttribute('transx')}, ${evt.clientY - evt.target.getAttribute('transy')})`);
    // console.log('mouseMove: ' + evt.clientX + ', ' + evt.clientY);
  }
};
const onMouseUpHandler = (evt) => {
  evt.target.removeAttribute('isdragging');
};
const onMouseLeaveHandler = (evt) => {
  if (evt.target.getAttribute('isdragging')) {
    evt.target.removeAttribute('isdragging');
  }
};
const onClickHandler = (evt) => {
  if (!evt.target.getAttribute('isdragging')) {
    console.log('going to edit');
  }
}
