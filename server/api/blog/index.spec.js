'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var blogCtrlStub = {
  index: 'blogCtrl.index',
  show: 'blogCtrl.show',
  create: 'blogCtrl.create',
  update: 'blogCtrl.update',
  destroy: 'blogCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var blogIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './blog.controller': blogCtrlStub
});

describe('Blog API Router:', function() {

  it('should return an express router instance', function() {
    expect(blogIndex).to.equal(routerStub);
  });

  describe('GET /api/blogs', function() {

    it('should route to blog.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'blogCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/blogs/:id', function() {

    it('should route to blog.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'blogCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/blogs', function() {

    it('should route to blog.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'blogCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/blogs/:id', function() {

    it('should route to blog.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'blogCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/blogs/:id', function() {

    it('should route to blog.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'blogCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/blogs/:id', function() {

    it('should route to blog.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'blogCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
