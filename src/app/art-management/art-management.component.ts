import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddDataComponent } from '../dialog-add-data/dialog-add-data.component';
import { UtilserviceService } from '../utilservice.service';
import { Oeuvreresponse } from '../oeuvreresponse';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-art-management',
  templateUrl: './art-management.component.html',
  styleUrls: ['./art-management.component.scss']
})

export class ArtManagementComponent implements OnInit {
  displayedColumns: string[] = ['image',
   'name', 'description','date',
    'stock', 'price', 'reduction', 'action'];
  dataSource: Oeuvreresponse[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('myTable') myTable: MatTable<any>;
  listOeuvres : Oeuvreresponse[] = [];
  opened: boolean;
  mode: string;
  menubutton = true;
  name: any;
  constructor(private router : Router, public dialog: MatDialog, public utilservice : UtilserviceService) {
  }

  async ngOnInit() {
    if(localStorage.getItem("id") == null){
      this.logout();
    }
    this.dataSource = await this.getOeuvres();
    console.log("oninit dts", this.dataSource);
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
    console.log("should open now?") 
    const dialogRef = this.dialog.open(DialogAddDataComponent, {
      width: '800px',
      data: {},
    });

     dialogRef.afterClosed().subscribe(result => {
      this.dataSource.push(result);
      console.log(this.dataSource);
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
  checkTS(){
    console.log("Datasource", this.dataSource);
  }
}