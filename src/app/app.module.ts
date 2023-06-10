import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppAuthModule } from "./pages/auth/auth.module";
import { AppNavbarModule } from "./shared/navbar/navbar.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppNavbarModule,
    AppAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
