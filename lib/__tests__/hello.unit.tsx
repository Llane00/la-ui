function add(a:number, b:number) {
  return a + b;
}
describe('the first test example', () => {
  it('add(1,2) = 3', () => {
    expect(add(1,2)).toEqual(3);
  })
})