type ObjectOption<T extends string> = {
  name: string;
  value: T;
};

type Option<T extends string> = T | ObjectOption<T>;

export type { ObjectOption, Option };
