import renderer from 'react-test-renderer'
import React from 'react'
import Button from '../button'

describe('button', () => {
    it('button is div element', ()=>{
      const json = renderer.create(<Button btnType='default'>测试</Button>).toJSON()
      expect(json).toMatchSnapshot()
    })
})
