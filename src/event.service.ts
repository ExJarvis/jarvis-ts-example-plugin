import { OptionItem, RestResponseMap, RestEventMap } from "./types";
import { query } from "express";

export class Service {
  private static instance: Service;

  private constructor() {
    this.init();
  }

  public static getInstance(): Service {
    if (!Service.instance) {
      Service.instance = new Service();
    }
    return Service.instance;
  }

  private init = async () => {};

  public onSelection = async (args?: RestEventMap['onSelection']): Promise<RestResponseMap['onSelection']> => {
    return {
      options: [args?.option as OptionItem],
    };
  };

  public onQuery = async (args?: RestEventMap['onQuery']): Promise<RestResponseMap['onQuery']> => {
    return {
      options: [{
        summary: args?.query || '',
        details: args?.query || '',
      }]
    };
  };
}
