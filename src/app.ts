import express from "express";
import { AddressInfo } from "net";
import { RestEventMap, OptionItem, RestResponseMap } from "./types";
import { Service } from "./event.service";
import getPort from "get-port";

export const app = express();

app.get("/event", async (req, res) => {
  const events = req.query as RestEventMap;
  const response = {} as RestResponseMap & { error: any };

  // const details = [
  //   req.connection.remoteAddress,
  //   req.connection.remotePort,
  //   req.connection.localAddress,
  //   req.connection.localPort,
  // ];

  // res.write(`You are ${JSON.stringify({
  //   details,
  //   events,
  // })}`);

  if (!events || !Object.keys(events).length) {
    response.error = `Bad event ${JSON.stringify(
      events
    )} received from the app!`;
  }

  if (Object.keys(events).includes("onQuery")) {
    if (typeof events.onQuery?.query === "string") {
      response.onQuery = await Service.getInstance().onQuery({
        query: events.onQuery?.query,
      });
    }
  }

  if (Object.keys(events).includes("onSelection")) {
    if (typeof events.onSelection?.option?.summary === "string") {
      response.onSelection = await Service.getInstance().onSelection({
        option: events.onSelection.option,
      });
    }
  }

  res.send(response);
});

const getRange = ({ min, max }: { min: number; max: number }) => {
  const list = [];
  for (let i = min; i <= max; i++) {
    list.push(i);
  }
  return list;
};

export const runApp = async () => {
  const preferredPort = await getPort({
    port: getRange({ min: 51000, max: 55200 }),
  });
  const listener = app.listen(preferredPort, () => {
    return console.log(`server is listening on ${port}`);
  });

  const port = (listener.address() as AddressInfo)?.port;
};
