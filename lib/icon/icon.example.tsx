import React from 'react';
import Icon from './icon';

const IconExample:React.FunctionComponent = () => {
  return (
    <div>
      <Icon name="alipay"/>
      <Icon name="wechatpay"/>
      <Icon name="cardpay"/>
    </div>
  );
};

export default IconExample;