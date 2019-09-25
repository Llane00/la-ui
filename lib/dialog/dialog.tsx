import React, { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import Icon from '../icon/icon';
import { scopedClassMaker } from '../helpers/classes';
import Button from '../button/button';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
  enableMask?: boolean;
}

const scopedClass = scopedClassMaker('la-ui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const result = props.visible &&
    <Fragment>
      {props.enableMask && <div className={sc("mask")} onClick={onClickMask}></div>}
      <div className={sc("")}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>
          提示
      </header>
        <main className={sc("main")}>
          {props.children}
        </main>
        {
          props.buttons && props.buttons.length > 0 &&
          <footer className={sc("footer")}>
            {props.buttons && props.buttons.map((button, index) => React.cloneElement(button, { key: index }))}
          </footer>
        }
      </div>
    </Fragment>;
  return (
    ReactDOM.createPortal(result, document.body) //传送门
  );
};
Dialog.defaultProps = {
  closeOnClickMask: false,
  enableMask: true
};
const modal = (content: any, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, [false]), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const component = (
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        onClose();
        afterClose && afterClose();
      }}
      enableMask={true}
    >
      {content}
    </Dialog>);
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};
const alert = (content: string) => {
  const button = <Button btnType="primary" onClick={() => close()}>OK</Button>;
  const close = modal(content, [button]);
};
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    onClose();
    yes && yes();
  };
  const onNo = () => {
    onClose();
    no && no();
  };
  const buttons = [
    <Button btnType="primary" onClick={onYes}>yes</Button>,
    <Button btnType="primary" onClick={onNo}>no</Button>
  ];
  const onClose = modal(content, buttons, no);
};
export { alert, confirm, modal };
export default Dialog;