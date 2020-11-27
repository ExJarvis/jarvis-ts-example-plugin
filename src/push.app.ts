import { PushService } from "./push.service";
import {
  ClientEventMap,
  ServerEventMap
} from "./types";

export const runPluginApp = async () => {
  const service = await PushService.getInstance();

  service.io.on("event", async (map: ClientEventMap) => {
    console.log({ map });
    const response = {} as ServerEventMap;

    if (map.onWelcome) {
      await service.onWelcome(map.onWelcome);
    }

    if (map.onQuery) {
      response.onOptionsUpdated = await service.onQuery(map.onQuery);
    }

    if (map.onSelection) {
      response.onOptionsUpdated = await service.onSelection(map.onSelection);
    }

    service.emitEvent(response);
  });
};

runPluginApp();
