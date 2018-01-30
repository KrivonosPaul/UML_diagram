import React from 'react';
import {defaultMarkerProps} from '../defaultProperties';
import {defaultMarkerPathProps} from '../defaultProperties';
import {reassignDefault} from '../helperFunctions';

export default (props) => {
  const pathPassedProp = props.path ? props.path : {};
  const markerProps = props.marker ? reassignDefault(defaultMarkerProps, props.marker) : defaultMarkerProps;
  const pathProps = props.path ? reassignDefault(defaultMarkerPathProps, props.path) : defaultMarkerPathProps;
  return <marker {...markerProps}>
        <path {...pathProps} />
      </marker>;
}
