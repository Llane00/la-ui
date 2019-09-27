import React from 'react';
import { scopedClassMaker } from '../helpers/classes';
import './button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: string;
}

const scopedClass = scopedClassMaker('la-ui-button');
const sc = scopedClass;

const Button: React.FunctionComponent<ButtonProps> =
  ({
    className,
    btnType,
    children,
    ...restProps
  }) => {
    const isDefaultType = (!btnType || btnType === '' || btnType === 'default');
    const btnClassType = btnType ? btnType : '';
    return (
      <button className={sc({ '': true, [btnClassType]: !isDefaultType }, { extra: className })} {...restProps}>
        {children}
      </button>
    )
  }

export default Button