import React, { useState } from 'react';
import Dialog, { alert } from './dialog';

export default function () {
  const [x, setX] = useState(false); //for example 1
  const [y, setY] = useState(false); //for example 2

  return (
    <div>
      <div>
        <h1>example 1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x} buttons={
          [
            <button onClick={() => { setX(!x) }}>1</button>,
            <button onClick={() => { setX(!x) }}>2</button>
          ]
        } onClose={() => { setX(!x) }}>
          <div>dialog</div>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog visible={y} closeOnClickMask={true} buttons={
          [
            <button onClick={() => { setY(!y) }}>1</button>,
            <button onClick={() => { setY(!y) }}>2</button>
          ]
        } onClose={() => { setY(!y) }}>
          <div>dialog</div>
        </Dialog>
      </div>
      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
      </div>
    </div>
  )
};