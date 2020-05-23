// write some tests

const {fixId} = require('./users')
describe('users', () => {
    test('fix id', () => {
        expect(fixId("200")).toBe(200)
    })
  
})
