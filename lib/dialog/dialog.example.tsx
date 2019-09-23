import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';
import './dialog.example.scss';

export default function () {
  const [x, setX] = useState(false); //for 例子1
  const [y, setY] = useState(false); //for 例子2
  const openModal = () => {
    const close = modal(
      <h1>
        你好
        <button onClick={() => close()}>close</button>
      </h1>
    );
  }
  return (
    <div>
      <div className="dialog-example-ct">
        <h1>例子1 使用Dialog原始组件</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog
          visible={x}
          buttons={
            [
              <button onClick={() => { setX(!x) }}>1</button>,
              <button onClick={() => { setX(!x) }}>2</button>
            ]
          }
          onClose={() => { setX(!x) }}
        >
          <div>dialog</div>
        </Dialog>
      </div>
      <div className="dialog-example-ct">
        <h1>例子2 使用Dialog原始组件（无默认遮罩层）</h1>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog 
          visible={y} 
          closeOnClickMask={true} 
          buttons={
            [
              <button onClick={() => { setY(!y) }}>1</button>,
              <button onClick={() => { setY(!y) }}>2</button>
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
        <button onClick={() => alert('1')}>alert</button>
        <button onClick={() => confirm('1', () => {
          console.log('yes');
        }, () => {
          console.log('no');
        })}>confirm</button>
        <button onClick={() => modal(<h1>你好</h1>)}>modal</button>
      </div>
      <div className="dialog-example-ct">
        <h1>例子4 在Dialog动态组件modal中调用Dialog API</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </div>
  )
};