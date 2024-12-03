import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { faClose, faSave } from "@fortawesome/free-solid-svg-icons";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: "app-test-modal",
  templateUrl: "./test-modal.component.html",
  styleUrl: "./test-modal.component.scss",
})
export class TestModalComponent {
  faClose = faClose;
  faSave = faSave;
  constructor(
    public dialogRef: MatDialogRef<TestModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  close(): void {
    this.dialogRef.close();
  }
}
