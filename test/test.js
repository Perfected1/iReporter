// Import the dependencies for testing
import chai from 'chai';
import http from 'http';
import chaiHttp from 'chai-http';
import app from '../app';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Get all reports', () => {
  it('should list all reports', (done) => {
    chai.request(app)
      .get('/api/v1/reports')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('Get a single report', () => {
  it('it should allows users to get specific report GET', ((done) => {

    chai.request(app)
      .get(`/api/v1/reports/${1}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('Object');
        done(err);
      });
  }));
});

describe('create report by the user POST', () => {
  it('it allows you to create report   POST', ((done) => {
    const report = {
      createdOn: "23/11/2018",
      createdBy: "Chike Nnamadim",
      title: "Pick pocket",
      type: "Red-flag",
      location: "lat, long",
      status: "Approved",
      images: "image, image",
      video: "video, video",
      comment: "A red flag record. that talk about Internet fraud and how it affects our society"
    };

    chai.request(app)
      .post('/api/v1/reports')
      .send(report)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('Object');
        done(err);
      });
  }));
});





describe('update report  by the user PUT', () => {
  it('it allows you to update report   PUT', (done) => {
    chai.request(app)
      .get('/api/v1/reports')
      .end((err, res) => {
        // const id = 2;
        chai.request(app)
          .put('/api/v1/reports/2/')
          .send({
            title: 'Jungle Justice',
          });
        res.should.have.status(200);
        // eslint-disable-next-line no-unused-expressions
        // res.should.be.json;
        res.body.should.be.a('object');
        res.body.success.should.equal(true);
        done();
      });
  });
});

describe('cancel report   by the user PUT', () => {
  it('it allows you to cancel report PUT', (done) => {
    chai.request(app)
      .get('/api/v1/reports')
      .end((err, res) => {
        const reportId = 1;
        chai.request(app)
          .delete(`/api/v1/reports/:${reportId}/cancel`);
        res.should.have.status(200);
        res.body.should.be.a('object');
        // eslint-disable-next-line no-unused-expressions
        // res.should.be.json;
        res.body.success.should.equal(true);
        done();
      });
  });
});

