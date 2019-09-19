import React from 'react';
import classes from '../helpers/classes';
import { scopedClassMaker } from '../helpers/classes';
const sc = scopedClassMaker('llane-ui-layout');
import './layout.scss';

interface Porps extends React.HTMLAttributes<HTMLElement> {
}

const Content: React.FunctionComponent<Porps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={classes(sc('content'), className)} {...restProps}>
      {children}
    </div>
  );
};

export default Content;