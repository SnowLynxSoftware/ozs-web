/**
 * Load ENV variables into a provider class that we can use in our Service.
 */
export class ClientEnvProvider {
  private readonly _rawEnv: any;

  public get RawEnv(): any {
    return this._rawEnv;
  }

  constructor() {
    // @ts-ignore
    this._rawEnv = window["__env"];
    this.validateEnv();
  }

  private validateEnv(): void {
    if (!this._rawEnv) {
      throw new Error(
        "No environment variables were found for this client! This shouldn't happen. Please reach out to Support!"
      );
    }

    if (!this._rawEnv.apiGatewayURL) {
      throw new Error(
        "No [apiGatewayURL] was found for this client! This shouldn't happen. Please reach out to Support!"
      );
    }
  }
}
