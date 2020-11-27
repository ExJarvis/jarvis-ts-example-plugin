import { PushService } from "../src/push.service";
import assert from "assert";

describe("Test push events", () => {
  it("doHandShake", async () => {
    const res = await PushService.getInstance().doHandShake({
      keyword: 'd',
    });
    assert(res.data?.status === 'SUCCEEDED');
    // console.log(res);
  });
});
