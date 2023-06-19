import { Component, OnInit } from "@angular/core";
import { AppAuthService } from "../auth.service";
import { AppStorageService } from "../../../shared/storage/storage.service";
import { Router } from "@angular/router";
import { AppSettingsService } from "../../settings/settings.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.template.html",
  styleUrls: ["./login.scss"],
})
export class AppLoginComponent implements OnInit {
  public showRegisterButton: boolean = true;

  public email: string;
  public password: string;

  constructor(
    private readonly authService: AppAuthService,
    private readonly storageService: AppStorageService,
    private readonly settingsService: AppSettingsService,
    private readonly router: Router
  ) {
    this.email = "";
    this.password = "";
  }

  public ngOnInit() {
    const settings = this.settingsService.tryGetCachedSettings();
    if (settings) {
      this.showRegisterButton = settings.allowUserRegistration;
    }
  }

  public async login(): Promise<void> {
    try {
      const validationMessage = this.authService.validateLoginCredentials(
        this.email,
        this.password
      );
      if (validationMessage) {
        alert(validationMessage);
        return;
      }
      const sessionResponse = await this.authService.login(
        this.email.toLowerCase(),
        this.password
      );
      this.storageService.saveSessionToken(sessionResponse.sessionToken);
      const tokenData = await this.authService.getSessionTokenData();
      this.storageService.saveUserData(tokenData);
      this.authService.authStateChanged.next(true);
      await this.router.navigate(["/my-zoos"]);
    } catch (error: any) {
      console.error(error.message);
      this.storageService.clearAuthData();
      alert(error.message);
    }
  }
}
