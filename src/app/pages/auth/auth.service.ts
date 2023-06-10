import { AppClientDataService } from "../../shared/client-data/client-data.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppAuthService {
  constructor(private readonly clientDataService: AppClientDataService) {}

  public async login(username: string, password: string): Promise<any> {}
}
