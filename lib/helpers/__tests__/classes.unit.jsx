import classes from '../classes'
describe('classes', () => {
    it('接受1个classname', ()=>{
      const result = classes('a')
      expect(result).toEqual('a')
    })
    it('接受2个classname', ()=>{
      const result = classes('a', 'b')
      expect(result).toEqual('a b')
    })
    it('接受1个classname和undefined值', ()=>{
      const result = classes('a', undefined)
      expect(result).toEqual('a')
    })
    it('接受1个classname、undefined值、中文、false和null', ()=>{
      const result = classes('a', undefined, '中文', false, null)
      expect(result).toEqual('a 中文')
    })
    it('不接受参数', ()=>{
      const result = classes()
      expect(result).toEqual('')
    })
})
