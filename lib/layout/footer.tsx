import React from 'react';
import classes from '../helpers/classes';
import { scopedClassMaker } from '../classes';
const sc = scopedClassMaker('llane-ui-layout');
import './layout.scss';

interface Porps extends React.HTMLAttributes<HTMLElement> {
}

const Footer: React.FunctionComponent<Porps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={classes(sc('footer'), className)} {...restProps}>
      {children}
    </div>
  );
};

export default Footer;