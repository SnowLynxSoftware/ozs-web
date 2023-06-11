import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppMyZooListComponent } from "./my-zoo-list/my-zoo-list.component";

@NgModule({
  declarations: [AppMyZooListComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [AppMyZooListComponent],
  providers: [],
})
export class AppZooModule {}
