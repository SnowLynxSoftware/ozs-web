import { Component } from "@angular/core";
import { AppClientConfigService } from "./shared/client-config/client-config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.template.html",
  styleUrls: ["./app.scss"],
})
export class AppComponent {
  constructor(private readonly configService: AppClientConfigService) {}
}
