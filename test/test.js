// Import the dependencies for testing
import chai from 'chai';
import http from 'http';
import chaiHttp from 'chai-http';
import app from '../app';

// Configure chai
chai.use(chaiHttp);
chai.should();

// let app = null;

// beforeEach(() => {
//     app = http.createServer(app);
//     app.listen(process.env.PORT || 5000);
//   });
  
//   afterEach(() => {
//     app.close();
//   });

  describe('Get all reports', () => {
    it('should list ALL reports GET', (done) => {
      chai.request(app)
        .get('/api/v1/reports')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  
  describe('Get a single report', () => {
    it('it allows users to get specific report GET', (done) => {
      const reportVar = 1;
  
      chai.request(app)
        .get(`/api/v1/reports/${reportVar}`)
        .end((err, res) => {
          res.body.report.reportId.should.equal(1);
          res.body.success.should.equal('true');
          done();
        });
    });
  });
  
//   describe('Get report   by the userId', () => {
//     it('it allows you to get report   based on the userId GET', (done) => {
//       const userData = 121;
  
//       chai.request(app)
//         .get(`/api/v1/users/:${userData}/reports`)
//         .end((err, res) => {
//           // res.body.report[0].userId.should.equal(121);
//           res.body.success.should.equal('true');
//           done();
//         });
//     });
//   });
  
  describe('create report by the user POST', () => {
    it('it allows you to create report   POST', (done) => {
      chai.request(app)
        .post('/api/v1/reports/')
        .send({
          createdOn: "23/11/2018", //date
                createdBy: "Chike Nnamadim",
                title: "Pick pocket",
                type: "Red-flag",
                location: "lat, long",
                status: "Approved",
                images: "image, image",
                video: "video, video",
                comment: "A red flag record. that talk about Internet fraud and how it affects our society"
        })
        .end((err, res) => {
          res.should.have.status(201);
          // eslint-disable-next-line no-unused-expressions
          // res.should.be.json;
          // res.body.report.title.should.equal(pick pocket);
          res.body.success.should.equal('true');
          done();
        });
    });
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
          res.body.success.should.equal('true');
          done();
        });
    });
  });
  
  describe('cancel report   by the user PUT', () => {
    it('it allows you to cancel report   PUT', (done) => {
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
          res.body.success.should.equal('true');
          done();
        });
    });
  });


// describe("reports", () => {
//     describe("GET /", () => {
//         // Test to get all students record
//         it("should get all reports", (done) => {
//             chai.request(app)
//                 .get('/')
//                 .end((err, res) => {
//                     res.should.have.status(200);
//                     res.body.should.be.a('object');
//                     done();
//                 });
//         });
//         // Test to get single student record
//         it("should get a single report", (done) => {
//             const id = 1;
//             chai.request(app)
//                 .get(`/${id}`)
//                 .end((err, res) => {
//                     res.should.have.status(200);
//                     res.body.should.be.a('object');
//                     done();
//                 });
//         });

//         // Test to get single student record
//         it("should not get a single student record", (done) => {
//             const id = 5;
//             chai.request(app)
//                 .get(`/${id}`)
//                 .end((err, res) => {
//                     res.should.have.status(404);
//                     done();
//                 });
//         });
//     });
// });