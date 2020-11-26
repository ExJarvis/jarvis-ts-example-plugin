// Import the dependencies for testing
import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../src/app";
import { RestResponseMap, RestEventMap } from "../src/jarvis.types";

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Jarvis Events", () => {
  describe("GET /event", () => {
    // Test to get all students record
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
  });
});
