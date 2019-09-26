import React from 'react';
import './icon.scss';
import './importIcons';
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
    <svg className={classes('la-ui-icon', className)} 
      {...restProps}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;