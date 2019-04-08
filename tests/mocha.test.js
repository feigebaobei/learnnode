let expect = require('chai').expect
describe('Mocha', () => {
  beforeEach(() => {
    console.log('beforeEach')
  })
  describe('First Test', () => {
    it ('should assert 1 equals 1', () => {
      expect(1).to.equal(1)
    })
  })
})