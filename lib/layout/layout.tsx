import React, { ReactElement } from 'react';
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
  const hasSider = (length in childrenAsArray) &&
    (childrenAsArray).reduce((preResult, currentNode) => {
      return preResult || (currentNode.type === Sider);
    }, false);

  return (
    <div className={sc({'': true, hasSider}, {extra: className})} {...restProps}>
      {children}
    </div>
  );
};

export default Layout;
export {Layout};
export {default as Header} from './header';
export {default as Sider} from './sider';
export {default as Content} from './content';
export {default as Footer} from './footer';