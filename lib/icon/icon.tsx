import React from 'react';
import './icon.scss';
// import './importIcons';
import './icons/close.svg';
import './icons/alipay.svg';
import './icons/cardpay.svg';
import './icons/wechatpay.svg';
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = 
  ({
    className, 
    name, 
    ...restProps
  }) => {
  return (
    <svg className={classes('lui-icon', className)} 
      {...restProps}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;