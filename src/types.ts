export type OptionItem = {
  summary: string;
  details: string;
};

export type RestEventMap = Partial<{
  onQuery: {
    query: string;
  };
  onSelection: {
    option: OptionItem,
  };
  onExpansion: {
    option: OptionItem,
  },
}>;

export type RestResponseMap = Partial<{
  onQuery: {
    options?: OptionItem[],
  };
  onSelection: {
    options?: OptionItem[],
  };
  onExpansion: {
    options?: OptionItem[],
  },
}>;
