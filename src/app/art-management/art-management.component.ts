import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddDataComponent } from '../dialog-add-data/dialog-add-data.component';
import { UtilserviceService } from '../utilservice.service';
import { Oeuvreresponse } from '../oeuvreresponse';
import { MatTable } from '@angular/material/table';
import { DialogDeleteDataComponent } from '../dialog-delete-data/dialog-delete-data.component';
import { DialogUpdateDataComponent } from '../dialog-update-data/dialog-update-data.component';

@Component({
  selector: 'app-art-management',
  templateUrl: './art-management.component.html',
  styleUrls: ['./art-management.component.scss']
})

export class ArtManagementComponent implements OnInit {
  displayedColumns: string[] = ['image',
    'name', 'description', 'date',
    'stock', 'price', 'reduction', 'action'];
  dataSource: Oeuvreresponse[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('myTable') myTable: MatTable<any>;
  listOeuvres: Oeuvreresponse[] = [];
  opened: boolean;
  mode: string;
  menubutton = true;
  name: any;
  badge_val : number = 0;
  constructor(private router: Router, public dialog: MatDialog, public utilservice: UtilserviceService) {
  }

  async ngOnInit() {
    if (localStorage.getItem("id") == null) {
      this.logout();
    }
    this.dataSource = await this.getOeuvres();
    console.log("oninit dts", this.dataSource);
    this.badge_val = Number(localStorage.getItem("cart"));
  }

  async getOeuvres() {
    this.utilservice.getAllOeuvres().subscribe({
      next: (response) => {
        this.listOeuvres = response;
        this.dataSource = this.listOeuvres
        console.log("list oeuvres", this.listOeuvres);
      },
      error: (error) => {
        console.log(error);
      }
    });
    return this.listOeuvres;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddDataComponent, {
      width: '800px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  delete(dataToDelete: Oeuvreresponse) {
    var tosend = dataToDelete.oeuvre.id
    const dialogRef = this.dialog.open(DialogDeleteDataComponent, {
      width: '500px',
      data: { tosend },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }

  update(dataToUpdate: any) {
    console.log("data to upadte is : ", dataToUpdate);
    const dialogRef = this.dialog.open(DialogUpdateDataComponent, {
      width: '800px',
      data: { dataToUpdate },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }
}