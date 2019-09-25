import renderer from 'react-test-renderer'
import React from 'react'
import Button from '../button'
import { scopedClassMaker } from '../../helpers/classes'

describe('button', () => {
    it('button组件测试', ()=>{
      const json = renderer.create(<Button btnType='default'>测试</Button>).toJSON()
      expect(json).toMatchSnapshot()
    })
})

describe('scopedClassMaker', () => {
  it('', ()=>{
    const sc = scopedClassMaker('la-ui-button');
    expect(sc('')).toEqual('la-ui-button');
    expect(sc('x')).toEqual('la-ui-button-x');
    expect(sc({'': true})).toEqual('la-ui-button');
    expect(sc({'': true, 'default': false})).toEqual('la-ui-button');
    expect(sc({'': true, 'default': false}, {extra: 'red'})).toEqual('la-ui-button red');
  })
})
