import { Component, OnDestroy, OnInit } from "@angular/core";
import { AppAuthService } from "../../pages/auth/auth.service";
import { Subscription } from "rxjs";
import { AppStorageService } from "../storage/storage.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.template.html",
  styleUrls: ["./navbar.scss"],
})
export class AppNavbarComponent implements OnInit, OnDestroy {
  public isLoggedIn: boolean = false;
  public displayName: string = "";

  public authStateChangedSubscription: Subscription;

  constructor(
    private readonly authService: AppAuthService,
    private readonly storageService: AppStorageService
  ) {
    this.authStateChangedSubscription = new Subscription();
  }

  public async ngOnInit(): Promise<void> {
    // Set initial state based on storage
    const sessionToken = this.storageService.getSessionToken();
    if (sessionToken) {
      this.updateState(true);
    } else {
      this.updateState(false);
    }

    this.authStateChangedSubscription =
      this.authService.authStateChanged.subscribe((isLoggedIn: boolean) => {
        this.updateState(isLoggedIn);
      });
  }

  public ngOnDestroy(): void {
    this.authStateChangedSubscription.unsubscribe();
  }

  private updateState(isLoggedIn: boolean): void {
    this.isLoggedIn = isLoggedIn;
    if (this.isLoggedIn) {
      this.displayName = this.storageService.getCurrentUserEmail();
    } else {
      this.displayName = "";
    }
  }
}
