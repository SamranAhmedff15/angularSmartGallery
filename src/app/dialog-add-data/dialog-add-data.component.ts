import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Materiaux } from '../materiaux';
import { Oeuvre } from '../oeuvre';
import { Style } from '../style';
import { TypeOeuvre } from '../type-oeuvre';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-dialog-add-data',
  templateUrl: './dialog-add-data.component.html',
  styleUrls: ['./dialog-add-data.component.scss']
})


export class DialogAddDataComponent implements OnInit {

  listTypes: TypeOeuvre[];
  listStyles: Style[];
  listMats: Materiaux[];
  listSelectMats : Materiaux[] = [];
  description: string;
  selected: string;
  oeuvre : Oeuvre = new Oeuvre();
  type : TypeOeuvre = new TypeOeuvre();
  style : Style = new Style();
  formData = new FormData();
  materiaux : Materiaux = new Materiaux();
  showSelect = false;
  constructor(
    private utilservice: UtilserviceService,
    private dialogRef: MatDialogRef<DialogAddDataComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.description;
  }

   async ngOnInit() {
    this.oeuvre = new Oeuvre();
    this.type = new TypeOeuvre();
    this.style = new Style();
    this.materiaux = new Materiaux();
    this.oeuvre.libelleOeuvre = '';
    this.listTypes = await this.initType();
    this.listMats = await this.initMats();
  }

  changeValue(value: TypeOeuvre) {
    if(value) {
      this.showSelect = true;
      this.listStyles = value.styles;
      for(let element of this.listMats) {
        console.log("value.id",value.id)
        if(element.type.id === value.id) {
          console.log("match !")
          this.listSelectMats.push(element);
        }
      }
    }
    else {
      this.showSelect = false;
      this.listSelectMats = [];
      this.listStyles = [];
    }
  }

  save() {
    
  }

  close() {
    this.dialogRef.close();
  }
  fileName = '';

    onFileSelected(event) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            this.formData.append("thumbnail", file);
        }
    }

    async initType(){
      this.utilservice.getAllType().subscribe({
        next: (response) => {
          this.listTypes = response;
          console.log("list api", this.listTypes);
        },
        error: (error) => {
          console.log(error);
        }
      });
      return this.listTypes;
    }

    async initMats() {
      this.utilservice.getAllMats().subscribe({
        next: (response) => {
          this.listMats = response;
          console.log("list mat", this.listMats);
        },
        error: (error) => {
          console.log(error);
        }
      });
      return this.listMats;
    }
}
