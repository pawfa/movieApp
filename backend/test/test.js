const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

describe('API endpoint /movies', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function() {

  });

  after(function() {

  });

  // GET - List all movies
  it('should return all movies', function() {
    return chai.request(app)
        .get('/movies')
        .then(function(res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
        });
  });

  // POST - Add new movie
  it('should return movie object', function() {
    return chai.request(app)
        .post('/movies')
        .send({
          query: 'YELLOW'
        })
        .then(function(res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.be.an('object');
          expect(res.body).to.be.an('object');
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('_id');
          expect(res.body).to.have.property('description');
        });
  });

  // POST - Bad movie query
  it('should return error', function() {
    return chai.request(app)
        .post('/movies')
        .send({
          query: 'random_strange*sign'
        })
        .then(function(res) {
          expect(res).to.have.status(404);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.include({error: "Movie not found!"});
        });
  });


  // POST - Empty body
  it('should return error', function() {
    return chai.request(app)
        .post('/movies')
        .send({
        })
        .then(function(res) {
          expect(res).to.have.status(404);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.include({error: "Body is empty!"});
        });
  });


  // GET - List all comments
  it('should return all comments', function() {
    return chai.request(app)
        .get('/comments')
        .then(function(res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
        });
  });

  // GET - List all comments for wrong movieId
  it('should return error movie not exists', function() {
    return chai.request(app)
        .get('/comments?id=1234567')
        .then(function(res) {
          expect(res).to.have.status(404);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.include({error: "Wrong movie id"});
        });
  });

  // GET - Invalid path
  it('should return error', function() {
    return chai.request(app)
        .get('/invalid_path')
        .then(function(res) {
          expect(res).to.have.status(404);
        });
  });

  // POST - Empty body
  it('should return error', function() {
    return chai.request(app)
        .post('/comments')
        .send({
        })
        .then(function(res) {
          expect(res).to.have.status(404);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.include({error: "Body is empty!"});
        });
  });

});