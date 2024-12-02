import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MenuCardComponent } from "./components/menu-card/menu-card.component";

@NgModule({
  declarations: [],
  imports: [MaterialModule, FontAwesomeModule],
  exports: [MaterialModule, FontAwesomeModule],
})
export class SharedModule {}
