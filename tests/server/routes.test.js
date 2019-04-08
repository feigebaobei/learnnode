let home = require('../../controllers/home.js'),
  image = require('../../controllers/image.js'),
  routes = require('../../server/routes.js')

describe('Routes', () => {
  let app = {
    get: sinon.spy(),
    post: sinon.spy(),
    delete: sinon.spy()
  }
  beforeEach(() => {
    routes.initialize(app)
  })
  describe('GETs', () => {
    it('should handle /', () => {
      expect(app.get).to.be.calledWith('', home.index)
    })
    it('should handle /images/:image_id', () => {
      expect(app.get).to.be.calledWith(`/images/:image_id`, `${image.index}`)
    })
  })
  describe('POSTs', () => {
    it('should handle /images', () => {
      expect(app.post).to.be.calledWith('/images', image.create)
    })
    it('should handle /images/:image_id/like', () => {
      expect(app.post).to.be.calledWith('/images/:image_id/like', image.like)
    })
    it('should handle /images/:image_id/comment', () => {
      expect(app.post).to.be.calledWith('/images/:image_id/comment', image.comment)
    })
  })
  describe('DELETEs', () => {
    it('should handle /image/:image_id', () => {
      expect(app.delete).to.be.calledWith('/images/:image_id', image.remove)
    })
  })
})