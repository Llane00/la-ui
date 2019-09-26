import renderer from 'react-test-renderer'
import React from 'react';
import { alert, confirm, modal } from '../dialog';
import Button from '../../button/button';

describe('dialog', () => {
  it('dialog alert组件快照测试', () => {
    const json = renderer.create(<Button btnType='primary' onClick={() => alert('1')}>alert</Button>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('dialog confirm组件快照测试', () => {
    const json = renderer.create(<Button btnType='primary' onClick={() => confirm('1', () => {
      console.log('yes');
    }, () => {
      console.log('no');
    })}>confirm</Button>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('dialog modal组件快照测试', () => {
    const json = renderer.create(<Button btnType='primary' onClick={() => modal(<h1>你好</h1>)}>modal</Button>).toJSON()
    expect(json).toMatchSnapshot()
  })

})
