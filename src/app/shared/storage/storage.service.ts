import { Injectable } from "@angular/core";
import { StorageHelper } from "./storage.helper";
import { StorageKeys } from "./storage-keys.enum";

@Injectable({
  providedIn: "root",
})
export class AppStorageService {
  constructor() {}

  public saveSessionToken(token: string): void {
    StorageHelper.set(StorageKeys.SESSION_TOKEN, token);
  }

  public getSessionToken(): string {
    return StorageHelper.get(StorageKeys.SESSION_TOKEN);
  }

  public saveUserData(userData: { id: number; email: string }): void {
    StorageHelper.set(StorageKeys.USER_DATA, userData);
  }

  public getUserData(): string {
    return StorageHelper.get(StorageKeys.USER_DATA);
  }

  public getCurrentUserID(): number {
    const userData = StorageHelper.get(StorageKeys.USER_DATA);
    return userData ? userData.id : null;
  }

  public getCurrentUserEmail(): string {
    const userData = StorageHelper.get(StorageKeys.USER_DATA);
    return userData ? userData.email : null;
  }

  public clearAuthData(): void {
    StorageHelper.remove(StorageKeys.SESSION_TOKEN);
    StorageHelper.remove(StorageKeys.USER_DATA);
  }
}
