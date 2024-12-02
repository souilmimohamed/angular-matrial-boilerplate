import { Component, OnInit } from "@angular/core";
import { menuItem } from "../../shared/models/menu-item.model";
import { MenuService } from "../../shared/services/menu.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent implements OnInit {
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }
  menuItems: menuItem[] = [];
}
