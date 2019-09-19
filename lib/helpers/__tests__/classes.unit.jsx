import classes, { scopedClassMaker } from '../classes'
describe('classes', () => {
    it('reveive one classname param', ()=>{
      const result = classes('a')
      expect(result).toEqual('a')
    })
    it('reveive two classname param', ()=>{
      const result = classes('a', 'b')
      expect(result).toEqual('a b')
    })
    it('reveive one classname param and one undefined param', ()=>{
      const result = classes('a', undefined)
      expect(result).toEqual('a')
    })
    it('reveive one classname param, one undefined param, one chinese string, one false param and one null param', ()=>{
      const result = classes('a', undefined, '测试', false, null)
      expect(result).toEqual('a 测试')
    })
    it('reveive none param', ()=>{
      const result = classes()
      expect(result).toEqual('')
    })
})

describe('scopedClassMaker', () => { 
  it('', ()=>{
    const sc = scopedClassMaker('llane-ui-layout');
    expect(sc('')).toEqual('llane-ui-layout');
    expect(sc('x')).toEqual('llane-ui-layout-x');
    expect(sc({y: true, z: false})).toEqual('llane-ui-layout-y');
    expect(sc({y: true, z: true})).toEqual('llane-ui-layout-y llane-ui-layout-z');
    expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('llane-ui-layout-y llane-ui-layout-z red');
  })
})
