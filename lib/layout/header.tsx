import React from 'react';
import { scopedClassMaker } from '../helpers/classes';
const sc = scopedClassMaker('la-ui-layout');
import './layout.scss';

interface Porps extends React.HTMLAttributes<HTMLElement> {
}

const Header: React.FunctionComponent<Porps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={sc('header', {extra: className})} {...restProps}>
      {children}
    </div>
  );
};

export default Header;