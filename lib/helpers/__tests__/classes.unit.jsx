import classes from '../classes'
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
      const result = classes('a', undefined, '中文', false, null)
      expect(result).toEqual('a 中文')
    })
    it('reveive none param', ()=>{
      const result = classes()
      expect(result).toEqual('')
    })
})
