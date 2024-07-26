export interface ILogger {
  info: (message: string) => Promise<void>;
  warn: (message: string) => Promise<void>;
  error: (message: string, error: unknown) => Promise<void>;
}
