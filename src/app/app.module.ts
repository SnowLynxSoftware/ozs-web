import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppAuthModule } from "./pages/auth/auth.module";
import { AppNavbarModule } from "./shared/navbar/navbar.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppZooModule } from "./pages/zoo/zoo.module";
import { appInitializer } from "./app.initializer";
import { AppSettingsService } from "./pages/settings/settings.service";
import { AppStorageService } from "./shared/storage/storage.service";
import { AppClientDataService } from "./shared/client-data/client-data.service";
import { AppClientConfigService } from "./shared/client-config/client-config.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppNavbarModule,
    AppAuthModule,
    AppZooModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AppSettingsService, AppStorageService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
