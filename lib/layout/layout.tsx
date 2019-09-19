import React, { ReactElement } from 'react';
import classes from '../helpers/classes';
import { scopedClassMaker } from '../helpers/classes';
const sc = scopedClassMaker('llane-ui-layout');
import './layout.scss';
import Sider from './sider';

interface Porps extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Porps> = ({
  className,
  children,
  ...restProps
}) => {
  const childrenAsArray = children as Array<ReactElement>;
  const hasSider = ((childrenAsArray).length) &&
    (childrenAsArray).reduce((preResult, currentNode) => {
      return preResult || (currentNode.type === Sider);
    }, false);

  return (
    <div className={classes(sc(), (hasSider ? sc('hasSider') : ''), className)} {...restProps}>
    {/* <div className={sc({'': true, hasSider}, {extra: className})} {...restProps}></div> */}
      {children}
    </div>
  );
};

export default Layout;