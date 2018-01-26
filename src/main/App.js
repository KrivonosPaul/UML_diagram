import React, {Fragment} from 'react';

import BlockStore from '../BlockStore';
import SvgCanvas from '../SvgCanvas';

export default () => <Fragment>
    <SvgCanvas />
    <BlockStore />
  </Fragment>;
