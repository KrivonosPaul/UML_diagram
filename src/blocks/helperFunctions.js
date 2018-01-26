export const randomId = () => {
  return `${Math.floor(Math.random()*1000) + 1}_${Math.floor(Math.random()*1000) + 1}`;
};

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
});

const onMouseDownHandler = (evt) => {
  evt.target.setAttribute('isdragging', true);
  evt.target.setAttribute('transx', evt.clientX);
  evt.target.setAttribute('transy', evt.clientY);
};
const onMouseMoveHandler = (evt) => {
  if (evt.target.getAttribute('isdragging')) {
    evt.target.setAttribute('transform',
    `translate(${evt.clientX - evt.target.getAttribute('transx')}, ${evt.clientY - evt.target.getAttribute('transy')})`);
  }
};
const onMouseUpHandler = (evt) => {
  if (evt.target.getAttribute('isdragging')) {
    evt.target.removeAttribute('isdragging');
    if (evt.target.getAttribute('x')){
      evt.target.setAttribute('x', evt.clientX - parseInt(evt.target.getAttribute('transx')) + parseInt(evt.target.getAttribute('x')));
      evt.target.setAttribute('y', evt.clientY - parseInt(evt.target.getAttribute('transy')) + parseInt(evt.target.getAttribute('y')));
    } else if (evt.target.getAttribute('cx')) {
      evt.target.setAttribute('cx', evt.clientX - parseInt(evt.target.getAttribute('transx')) + parseInt(evt.target.getAttribute('cx')));
      evt.target.setAttribute('cy', evt.clientY - parseInt(evt.target.getAttribute('transy')) + parseInt(evt.target.getAttribute('cy')));
    }
    evt.target.removeAttribute('transform');
    evt.target.removeAttribute('transx');
    evt.target.removeAttribute('transy');
    evt.stopPropagation();
    evt.preventDefault();
  }
};
const onMouseLeaveHandler = (evt) => {
  if (evt.target.getAttribute('isdragging')) {
    onMouseUpHandler(evt);
  }
};
