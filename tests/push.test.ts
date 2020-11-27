import { PushService } from "../src/push.service";
import assert from "assert";

describe("Test push events", () => {
  it("doHandShake", async () => {
    const port = 12345;
    const res = await PushService.getInstance().doHandShake({
      port,
      keyword: 'd',
    });
    assert(res.data?.status === 'SUCCEEDED');
    console.log(res.data.message);
    assert(res.data.message === `Welcome ::ffff:127.0.0.1:${port}\nYour keyword 'd' has been registered!`);
    // console.log(res);
  });
});
