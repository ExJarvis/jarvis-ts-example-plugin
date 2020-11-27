import axios, { AxiosResponse } from "axios";
import { PushEventMap, PushResponseMap, APIResponse } from "./types";

export class PushService {
  private static instance: PushService;
  private HOST = "http://localhost:7979";

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

  private callApi = async (
    params?: PushEventMap
  ): Promise<AxiosResponse<PushResponseMap>> => {
    const res = await axios.get<PushResponseMap>(`${this.HOST}/event`, {
      params,
    });
    return res;
  };

  public doHandShake = async (
    args?: PushEventMap["onHandShake"]
  ): Promise<APIResponse<PushResponseMap["onHandShake"]>> => {
    const res = await this.callApi({
      onHandShake: args,
    });
    return {
      status: res.status >= 200 && res.status < 300 ? "SUCCEEDED" : "FAILED",
      data: res.data?.onHandShake,
    };
  };
}
