import { IApp } from "./IApp";
import { ILogger } from "./ILogger";

export abstract class AppTemplateBase<T> implements IApp<T> {
  public logger: ILogger;
  public ioc: T;

  abstract createIoc(): T;
  abstract createLogger(): ILogger;

  constructor() {
    this.logger = this.createLogger();
    this.ioc = this.createIoc();
  }

  abstract initContainer(): Promise<void>;
  abstract init(): Promise<void>;
  abstract register(ioc: T): Promise<void>;
  abstract resolve(ioc: T): Promise<void>;
  abstract main(): Promise<void>;
  abstract exit(): Promise<void>;

  async execute() {
    this.logger.info("Application startup initiated.");

    try {
      await this.initContainer();
      this.logger.info("Container initialization completed successfully.");
    } catch (error) {
      await this.logger.error(
        "Failed during container initialization: ",
        error
      );
      return;
    }

    this.logger.info("Application initialization started.");
    try {
      await this.init();
      this.logger.info("Application initialization completed successfully.");
    } catch (error) {
      await this.logger.error(
        "Failed during application initialization: ",
        error
      );
      return;
    }

    this.logger.info("IOC container registration started.");
    try {
      await this.register(this.ioc);
      this.logger.info("IOC container registration completed successfully.");
    } catch (error) {
      await this.logger.error(
        "Failed during IOC container registration: ",
        error
      );
      return;
    }

    this.logger.info("IOC container resolve started.");
    try {
      await this.resolve(this.ioc);
      this.logger.info("IOC container resolve completed successfully.");
    } catch (error) {
      await this.logger.error("Failed during IOC container resolve: ", error);
      return;
    }

    this.logger.info("Main application logic execution started.");
    try {
      await this.main();
      this.logger.info(
        "Main application logic execution completed successfully."
      );
    } catch (error) {
      await this.logger.error(
        "Failed during main application logic execution: ",
        (error as Error).stack
      );
      return;
    }

    this.logger.info("Application shutdown process initiated.");
    try {
      await this.exit();
      this.logger.info("Application shutdown process completed successfully.");
    } catch (error) {
      await this.logger.error(
        "Failed during application shutdown process: ",
        error
      );
    }

    this.logger.info("Application execution completed.");
  }
}
