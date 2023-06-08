import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppLoginComponent } from "./login/login.component";

@NgModule({
  declarations: [AppLoginComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [AppLoginComponent],
  providers: [],
})
export class AppAuthModule {}
