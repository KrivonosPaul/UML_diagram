import React, {Fragment} from 'react';

import BlockStore from '../BlockStore';
import SvgCanvas from '../SvgCanvas';
import EditorMenu from '../EditorMenu';

export default () => <Fragment>
    <SvgCanvas />
    <BlockStore />
    <EditorMenu />
  </Fragment>;
