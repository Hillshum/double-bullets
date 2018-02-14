const foo = require('./foo')

describe('foo', ()=> {
  it('should return foo', ()=>{
    expect(foo()).toEqual('foo')
  })
})