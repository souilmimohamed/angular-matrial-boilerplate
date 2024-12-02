import { Injectable } from "@angular/core";
import { menuItem } from "../models/menu-item.model";
import {
  faHome,
  faFile,
  faChartBar,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  constructor() {}

  getMenuItems(includeDashboard: boolean = false): menuItem[] {
    const menu = [
      {
        Text: "Menu One",
        Icon: faPen,
        Url: "firstMenu",
      },
      {
        Text: "Menu Two",
        Icon: faFile,
        Url: "#",
      },
      {
        Text: "Menu Three",
        Icon: faChartBar,
        Url: "#",
      },
    ];
    if (includeDashboard)
      menu.unshift({
        Text: "Dashboard",
        Icon: faHome,
        Url: "/",
      });

    return menu;
  }
}
