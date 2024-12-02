import { Component, Input } from "@angular/core";
import { menuItem } from "../../models/menu-item.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu-card",
  templateUrl: "./menu-card.component.html",
  styleUrl: "./menu-card.component.scss",
})
export class MenuCardComponent {
  @Input() item: menuItem;
  constructor(private router: Router) {}
  click() {
    this.router.navigate([this.item.Url]);
  }
}
