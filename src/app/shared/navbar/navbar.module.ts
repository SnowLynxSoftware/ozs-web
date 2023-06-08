import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppNavbarComponent } from "./navbar.component";

@NgModule({
  declarations: [AppNavbarComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [AppNavbarComponent],
  providers: [],
})
export class AppNavbarModule {}
