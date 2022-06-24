import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAddDataComponent } from '../dialog-add-data/dialog-add-data.component';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-dialog-delete-data',
  templateUrl: './dialog-delete-data.component.html',
  styleUrls: ['./dialog-delete-data.component.scss']
})
export class DialogDeleteDataComponent implements OnInit {

  tobedeleted: any;

  constructor(private utilservice: UtilserviceService,
    private dialogRef: MatDialogRef<DialogAddDataComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tobedeleted = {...data};
    console.log(this.tobedeleted.tosend);
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  async deleteOeuvre() {
    console.log(this.tobedeleted.tosend)
    this.utilservice.deleteOeuvre(this.tobedeleted.tosend).subscribe({
      next: (response) => {
        console.log("Deleted", response)
        this.close();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
