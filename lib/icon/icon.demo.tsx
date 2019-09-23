import React from 'react';
import Demo from '../../example/demo.example';
import IconExample from './icon.example';

const x = require('!!raw-loader!./icon.example.tsx');

const IconDemo = () => {
  return (
    <Demo code={x.default}>
      <IconExample />
    </Demo>
  )
}

export default IconDemo;