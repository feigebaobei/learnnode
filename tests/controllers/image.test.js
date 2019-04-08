var proxyquire = require('proxyquire'),
  callback = sinon.spy(),
  sidebarStub = sinon.stub(),
  fsStub = {},
  pathStub = {},
  md5Stub = {},
  ModelsStub = {
    Image: {
      findOne: sinon.spy()
    },
    Comment: {
      find: sinon.spy()
    }
  },
  image = proxyquire('../../controllers/image', {
    '../helpers/sidebar': sidebarStub,
    '../models': ModelsStub,
    'fs': fsStub,
    'path': pathStub,
    'md5': md5Stub
  }),
  res = {},
  req = {},
  testImage = {};

describe('Image Controller', function() {
  beforeEach(function() {
    res = {
      render: sinon.spy(),
      json: sinon.spy(),
      redirect: sinon.spy()
    };
    req.params = {
      image_id: 'testing'
    };
    testImage = {
      _id: 1,
      title: 'Test Image',
      views: 0,
      likes: 0,
      save: sinon.spy()
    };
  });
  // to do: write tests...
  describe('Index', function() {
    it('should be defined', function() {
      expect(image.index).to.be.defined;
    });
    it('should call Models.Image.findOne', function() {
      ModelsStub.Image.findOne = sinon.spy();
      image.index(req, res);
      expect(ModelsStub.Image.findOne).to.be.called;
    });
    it('should find Image by parameter id', function() {
      ModelsStub.Image.findOne = sinon.spy();
      image.index(req, res);
      expect(ModelsStub.Image.findOne).to.be.calledWith({ filename: { $regex: 'testing' } },
        sinon.match.func);
    });
    // to do: write more tests...
    it('should execute sidebar', function() {
      ModelsStub.Comment.find =
        sinon.stub().callsArgWith(3, null, [1, 2, 3]);
      image.index(req, res);
      expect(sidebarStub).to.be.calledWith({ image: testImage, comments: [1, 2, 3] },
        sinon.match.func);
    });
    it('should render image template with image and comments',
      function() {
        ModelsStub.Comment.find =
          sinon.stub().callsArgWith(3, null, [1, 2, 3]);
        sidebarStub.callsArgWith(1, {
          image: testImage,
          comments: [1, 2, 3]
        });
        image.index(req, res);
        expect(res.render).to.be.calledWith('image', {
          image: testImage,
          comments: [1, 2, 3]
        });
      });
  });
});
