import axios, { AxiosResponse } from "axios";
import {
  ServerEventMap,
  ClientEventMap,
  APIResponse,
  OptionItem,
} from "./types";
import socketIO from "socket.io-client";

export class PushService {
  private static instance: PushService;
  private HOST = "http://localhost:7979";
  public io = socketIO.connect(this.HOST);

  private constructor() {
    this.init();
  }

  public static getInstance(): PushService {
    if (!PushService.instance) {
      PushService.instance = new PushService();
    }
    return PushService.instance;
  }

  private init = async () => {
    this.doRegister({
      keyword: 'd',
    });
  };

  public emitEvent = (params?: ServerEventMap) => {
    return params && Object.keys(params).length && this.io.emit("event", params);
  };

  private doRegister = (args?: ServerEventMap["onRegister"]) => {
    return this.emitEvent({ onRegister: args });
  };

  public onWelcome = async (args?: ClientEventMap["onWelcome"]) => {};

  public onQuery = async (
    args?: ClientEventMap["onQuery"]
  ): Promise<ServerEventMap["onOptionsUpdated"]> => {
    return {
      options: [
        {
          summary: args?.query || "",
          details: args?.query || "",
        },
      ],
    };
  };

  public onSelection = async (
    args?: ClientEventMap["onSelection"]
  ): Promise<ServerEventMap["onOptionsUpdated"]> => {
    return {
      options: [args?.option as OptionItem],
    };
  };
}
