import { AppClientDataService } from "../../shared/client-data/client-data.service";
import { Injectable } from "@angular/core";
import { APIRoutes } from "../../shared/client-data/api-routes";
import { SettingsDTO } from "@snowlynxsoftware/ozs-common";
import { AppStorageService } from "../../shared/storage/storage.service";

@Injectable({
  providedIn: "root",
})
export class AppSettingsService {
  constructor(
    private readonly clientDataService: AppClientDataService,
    private readonly storageService: AppStorageService
  ) {}

  /**
   * Attempts to load the settings from the localStorage cache in the browser.
   */
  public tryGetCachedSettings(): SettingsDTO | null {
    try {
      return this.storageService.getSettings();
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  /**
   * Get settings from the API.
   * @param forceLatest If TRUE, will get latest settings from the DB and not from the Redis cache.
   */
  public getSettings(forceLatest: boolean = false): Promise<SettingsDTO> {
    return this.clientDataService.execute(APIRoutes.GET_SETTINGS, {
      queryParams: {
        forceLatest: forceLatest,
      },
      excludeAuthHeaders: true,
    });
  }
}
