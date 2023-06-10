import { ClientEnvProvider } from "./client-env.provider";
import { Injectable } from "@angular/core";

/**
 * Handles the client configuration and environment variables.
 */
@Injectable({
  providedIn: "root",
})
export class AppClientConfigService {
  private readonly _rawEnv: any;

  constructor() {
    this._rawEnv = new ClientEnvProvider().RawEnv;
  }

  public get APIGatewayURL(): string {
    return this._rawEnv.apiGatewayURL;
  }
}
