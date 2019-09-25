import React, { Fragment } from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Button btnType='default' onClick={()=>{console.log('点击默认按钮')}}>默认按钮</Button>
      <Button btnType='primary'>primary</Button>
    </Fragment>
  );
};

export default ButtonExample;