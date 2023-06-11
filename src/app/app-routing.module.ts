import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authRoutes } from "./pages/auth/auth.routes";
import { zooRoutes } from "./pages/zoo/zoo.routes";

const routes: Routes = [
  ...authRoutes,
  ...zooRoutes,
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", redirectTo: "/login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
