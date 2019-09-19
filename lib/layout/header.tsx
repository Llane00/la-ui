import React from 'react';
import classes from '../helpers/classes';
import { scopedClassMaker } from '../helpers/classes';
const sc = scopedClassMaker('llane-ui-layout');
import './layout.scss';

interface Porps extends React.HTMLAttributes<HTMLElement> {
}

const Header: React.FunctionComponent<Porps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={classes(sc('header'), className)} {...restProps}>
      {children}
    </div>
  );
};

export default Header;