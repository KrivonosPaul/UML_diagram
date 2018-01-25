export const DEFAUL_ATTRIBUTES = {
  fillOpacity: '0.3',
  fill: "#ffffff",
  strokeLinejoin: "round",
  strokeLinecap: "round",
  strokeOpacity: '1',
  stroke: "#000000",
  strokeWidth: '1',
  onMouseDown: (evt) => onMouseDownHandler(evt),
  onMouseMove: (evt) => onMouseMoveHandler(evt),
  onMouseUp: (evt) => onMouseUpHandler(evt)
};


const onMouseDownHandler = (evt) => {
  evt.target.setAttribute('isDragging', true);
  if (!evt.target.getAttribute('transX') && !evt.target.getAttribute('transY')) {
    evt.target.setAttribute('transX', evt.clientX);
    evt.target.setAttribute('transY', evt.clientY);
  }
  // console.log('mouseDown' + evt.target.id);
};

const onMouseMoveHandler = (evt) => {
  if (evt.target.getAttribute('isDragging')) {
    evt.target.setAttribute('transform',
    `translate(${evt.clientX - evt.target.getAttribute('transX')}, ${evt.clientY - evt.target.getAttribute('transY')})`);
    // console.log('mouseMove: ' + evt.clientX + ', ' + evt.clientY);
  }
};

const onMouseUpHandler = (evt) => {
  evt.target.removeAttribute('isDragging');
  // evt.target.setAttribute('transX', evt.clientX - evt.target.getAttribute('transX'));
  // evt.target.setAttribute('transY', evt.clientY - evt.target.getAttribute('transY'));
  // console.log('mouseUp' + evt.target.id);
};
