export type OptionItem = {
  summary: string;
  details: string;
};

export type RestEventMap = Partial<{
  onQuery: {
    query: string;
  };
  onSelection: {
    option: OptionItem;
  };
}>;

export type RestResponseMap = Partial<{
  onQuery: {
    options?: OptionItem[];
  };
  onSelection: {
    options?: OptionItem[];
  };
}>;

export type PushEventMap = Partial<{
  onOptionsUpdated: {
    options: OptionItem[];
  };
  onHandShake: {
    port: number,
    keyword?: string;
  };
}>;

export type PushResponseMap = Partial<{
  onOptionsUpdated: {};
  onHandShake: {
    status: 'SUCCEEDED' | 'FAILED',
    message: string;
  },
}>;

export type APIResponse<T> = {
  status: "SUCCEEDED" | "FAILED";
  data: T;
};
