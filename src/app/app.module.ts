import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppAuthModule } from "./pages/auth/auth.module";
import { AppNavbarModule } from "./shared/navbar/navbar.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppNavbarModule, AppAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
