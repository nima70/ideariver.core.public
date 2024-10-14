export interface BasePlugin {
  /**
   * Initialize the plugin with the required services.
   *
   * @param services - A dictionary of services (e.g., logging, text summarization).
   */
  init(services: Record<string, any>): void;

  /**
   * Execute the plugin's logic asynchronously.
   *
   * @param inputData - Data to be processed by the plugin.
   * @returns A promise that resolves to the result after processing.
   */
  run(inputData: Record<string, any>): Promise<Record<string, any>>;
}
