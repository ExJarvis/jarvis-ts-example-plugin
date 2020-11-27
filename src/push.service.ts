import axios, { AxiosResponse } from "axios";
import { ServerEventMap, ClientEventMap, APIResponse } from "./types";
import socketIO from 'socket.io-client';

export class PushService {
  private static instance: PushService;
  private HOST = "http://localhost:7979";
  private io = socketIO.connect(this.HOST);

  private constructor() {
    this.init();
  }

  public static getInstance(): PushService {
    if (!PushService.instance) {
      PushService.instance = new PushService();
    }
    return PushService.instance;
  }

  private init = async () => {};

  private emitEvent = (
    params?: ServerEventMap
  ) => {
    return this.io.emit('event', params); 
  };

  public doHandShake = (
    args?: ServerEventMap["onRegister"]
  ) => {
    return this.emitEvent({ onRegister: args });
  };
}
