import { AppSettingsService } from "./pages/settings/settings.service";
import { AppStorageService } from "./shared/storage/storage.service";

export function appInitializer(
  settingsService: AppSettingsService,
  storageService: AppStorageService
) {
  return async () => {
    try {
      console.log("LOADED");
      // Initialize Settings Cache
      const settings = await settingsService.getSettings();
      const cachedSettings = storageService.getSettings();
      if (
        !cachedSettings ||
        cachedSettings.lastModified !== settings.lastModified
      ) {
        storageService.saveSettings(settings);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
}
