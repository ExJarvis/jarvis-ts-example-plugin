import { OptionItem, RestResponseMap } from "./jarvis.types";
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

  public onSelection = async (args?: { option: OptionItem }): Promise<RestResponseMap['onSelection']> => {
    return {
      options: [args?.option as OptionItem],
    };
  };

  public onQuery = async (args?: { query: string }): Promise<RestResponseMap['onQuery']> => {
    return {
      options: [{
        summary: args?.query || '',
        details: args?.query || '',
      }]
    };
  };

  public onExpansion = async (args?: { option: OptionItem }): Promise<RestResponseMap['onExpansion']> => {
    return {
      options: [args?.option as OptionItem],
    };
  };
}
