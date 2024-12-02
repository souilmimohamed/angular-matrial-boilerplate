import { Component, OnInit } from "@angular/core";
import { MenuService } from "./shared/services/menu.service";
import { menuItem } from "./shared/models/menu-item.model";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  loading = false;
  loggedIn = true;
  menuItems: menuItem[] = [];
  faCoffee = faCoffee;
  languages = [
    {
      name: "English",
      short: "en",
    },
    {
      name: "Français",
      short: "fr",
    },
    {
      name: "Deutsh",
      short: "de",
    },
  ];
  selectedLang = "";
  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems(true);
  }
}
