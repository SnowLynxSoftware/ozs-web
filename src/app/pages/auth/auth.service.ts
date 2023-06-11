import { AppClientDataService } from "../../shared/client-data/client-data.service";
import { Injectable } from "@angular/core";
import { StringUtil } from "@snowlynxsoftware/ozs-common";
import { APIRoutes } from "../../shared/client-data/api-routes";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppAuthService {
  public authStateChanged: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly clientDataService: AppClientDataService) {}

  /**
   * Validate the login credentials, so we don't make an unnecessary API call.
   */
  public validateLoginCredentials(username: string, password: string): string {
    try {
      if (!StringUtil.trimString(username)) {
        return "Email is a required field!";
      }

      if (!StringUtil.trimString(password)) {
        return "Password is a required field!";
      }

      if (username.indexOf("@") === -1 || username.indexOf(".") === -1) {
        return "Email Address is an invalid format!";
      }

      if (password.length < 8) {
        return "Password is too short!";
      }

      return "";
    } catch (error: any) {
      return error.message;
    }
  }

  public async login(username: string, password: string): Promise<any> {
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
    return this.clientDataService.execute(APIRoutes.POST_AUTH_LOGIN, {
      additionalHeaders: {
        Authorization: authHeader,
      },
      excludeAuthHeaders: true,
      method: "POST",
    });
  }

  public async getSessionTokenData(): Promise<any> {
    return this.clientDataService.execute(APIRoutes.GET_AUTH_ME);
  }
}
