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

export type ServerEventMap = Partial<{
  onOptionsUpdated: {
    options: OptionItem[],
  },
  onRegister: {
    keyword?: string;
  },
}>;

export type ClientEventMap = Partial<{
  onQuery: {
    query: string;
  };
  onSelection: {
    option: OptionItem,
  };
  onWelcome: {
    status: 'SUCCEEDED' | 'FAILED',
    message: string;
  },
}>;

export type APIResponse<T> = {
  status: "SUCCEEDED" | "FAILED";
  data: T;
};
