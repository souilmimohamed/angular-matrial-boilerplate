import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import {
  faArrowLeft,
  faPlus,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { MatDialog } from "@angular/material/dialog";
import { TestModalComponent } from "../test-modal/test-modal.component";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: "app-first-menu",
  templateUrl: "./first-menu.component.html",
  styleUrl: "./first-menu.component.scss",
})
export class FirstMenuComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router, public dialog: MatDialog) {}
  ngOnInit(): void {
    const ELEMENT_DATA: PeriodicElement[] = [
      { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
      { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
      { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
      { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
      { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
      { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
      { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
      { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
      { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
      { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
      { position: 11, name: "Copper", weight: 63.546, symbol: "Cu" },
    ];
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    setTimeout(() => (this.dataSource.paginator = this.paginator));
  }
  faArrowLeft = faArrowLeft;
  faPlus = faPlus;
  faPen = faPen;
  faTrash = faTrash;
  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "actions",
  ];
  dataSource: any;
  goBack() {
    this.router.navigate(["/"]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TestModalComponent, {
      minWidth: "40vw",
      minHeight: "24vh",
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
