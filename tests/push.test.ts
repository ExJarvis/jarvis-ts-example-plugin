import { PushService } from "../src/push.service";
import assert from "assert";

describe("Test push events", () => {
  it("doHandShake", async () => {
    const port = 12345;
    const res = await PushService.getInstance().doHandShake({
      port,
      keyword: 'd',
    });
  });
});
