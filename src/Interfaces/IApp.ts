import { ILogger } from "./ILogger";

export interface IApp<T> {
  init: () => Promise<void>;
  register: (ioc: T) => Promise<void>;
  resolve: (ioc: T) => Promise<void>;
  main: () => Promise<void>;
  execute: () => Promise<void>;
  exit: () => Promise<void>;
}
