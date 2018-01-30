export const defaultProperties = {
  fillOpacity: '1',
  fill: "#ffffff",
  strokeLinejoin: "round",
  strokeLinecap: "round",
  strokeOpacity: '1',
  stroke: "#000000",
  strokeWidth: '1'
}

export const defaultLineProps = {
  x1: 5,
  y1: 280,
  x2: 90,
  y2: 280,
  strokeLinecap: "round",
  strokeOpacity: '1',
  stroke: "#000000",
  strokeWidth: '2',
  markerEnd:'url(#markerArrow)'
}

export const defaultMarkerProps = {
  id: 'markerArrow',
  markerWidth: '13',
  markerHeight: '13',
  refX: '2',
  refY: '6',
  orient: 'auto',
  markerUnits: 'userSpaceOnUse',
}

export const defaultMarkerPathProps = {
  d: 'M2,2 L2,11 L10,6 L2,2',
  fill: '#000000'
}
