// Import the dependencies for testing
import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../src/app";
import { RestResponseMap, RestEventMap } from "../src/types";

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Test Events API", () => {
  describe("GET /event", () => {
    it("should get options onQuery", (done) => {
      chai
        .request(app,)
        .get("/event")
        .query({
          onQuery: {
            query: 'dummy query',
          }
        } as RestEventMap)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.onQuery.options[0].summary.should.be.equal('dummy query');
          done();
        }).timeout(15000);
    });

    it("should update options onSelection", (done) => {
      chai
        .request(app,)
        .get("/event")
        .query({
          onSelection: {
            option: {
              summary: 'dummy summary',
              details: 'dummy details',
            },
          }
        } as RestEventMap)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.onSelection.options[0].summary.should.be.equal('dummy summary');
          done();
        }).timeout(15000);
    });
  });
});
