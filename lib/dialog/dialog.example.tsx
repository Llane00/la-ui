import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';
import './dialog.example.scss';
import Button from '../button/button';

export default function () {
  const [x, setX] = useState(false); //for 例子1
  const [y, setY] = useState(false); //for 例子2
  const openModal = () => {
    const close = modal(
      <h1>
        你好
        <Button btnType='primary' onClick={() => close()}>close</Button> 
      </h1>
    );
  }
  return (
    <div>
      <div className="dialog-example-ct">
        <h1>例子1 使用Dialog原始组件</h1>
        <Button btnType='primary' onClick={() => setX(!x)}>click</Button> 
        <Dialog
          visible={x}
          buttons={
            [
              <Button btnType='primary' onClick={() => { setX(!x) }}>1</Button> ,
              <Button btnType='primary' onClick={() => { setX(!x) }}>2</Button> 
            ]
          }
          onClose={() => { setX(!x) }}
        >
          <div>dialog</div>
        </Dialog>
      </div>
      <div className="dialog-example-ct">
        <h1>例子2 使用Dialog原始组件（无默认遮罩层）</h1>
        <Button btnType='primary' onClick={() => setY(!y)}>click</Button> 
        <Dialog 
          visible={y} 
          closeOnClickMask={true} 
          buttons={
            [
              <Button btnType='primary' onClick={() => { setY(!y) }}>1</Button> ,
              <Button btnType='primary' onClick={() => { setY(!y) }}>2</Button> 
            ]
          }
          onClose={() => { setY(!y) }}
          enableMask={false}
        >
          <div>dialog</div>
        </Dialog>
      </div>
      <div className="dialog-example-ct">
        <h1>例子3 分别调用Dialog的动态组件alert，confirm，modal</h1>
        <Button btnType='primary' onClick={() => alert('1')}>alert</Button> 
        <Button btnType='primary' onClick={() => confirm('1', () => {
          console.log('yes');
        }, () => {
          console.log('no');
        })}>confirm</Button> 
        <Button btnType='primary' onClick={() => modal(<h1>你好</h1>)}>modal</Button> 
      </div>
      <div className="dialog-example-ct">
        <h1>例子4 在Dialog动态组件modal中调用Dialog API</h1>
        <Button btnType='primary' onClick={openModal}>modal</Button> 
      </div>
    </div>
  )
};