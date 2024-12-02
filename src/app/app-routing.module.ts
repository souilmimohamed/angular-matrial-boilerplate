import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstMenuComponent } from "./pages/first-menu/first-menu.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "firstMenu",
    component: FirstMenuComponent,
  },
  {
    path: "",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
