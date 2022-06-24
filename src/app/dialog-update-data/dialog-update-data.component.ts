import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Artiste } from '../artiste';
import { DialogAddDataComponent } from '../dialog-add-data/dialog-add-data.component';
import { Materiaux } from '../materiaux';
import { Oeuvre } from '../oeuvre';
import { Oeuvreresponse } from '../oeuvreresponse';
import { Style } from '../style';
import { TypeOeuvre } from '../type-oeuvre';
import { Uploadedfile } from '../uploadedfile';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-dialog-update-data',
  templateUrl: './dialog-update-data.component.html',
  styleUrls: ['./dialog-update-data.component.scss']
})
export class DialogUpdateDataComponent implements OnInit {

  uploadedFile: Uploadedfile;
  artiste: Artiste;
  listTypes: TypeOeuvre[];
  listStyles: Style[];
  listMats: Materiaux[];
  listSelectMats: Materiaux[] = [];
  description: string;
  selected: string;
  oeuvre: Oeuvre = new Oeuvre();
  type: TypeOeuvre = new TypeOeuvre();
  style: Style = new Style();
  formData = new FormData();
  materiaux: Materiaux = new Materiaux();
  showSelect = false;
  oeuvreReponse: Oeuvreresponse = new Oeuvreresponse();
  tobeupdated: any;

  constructor(private utilservice: UtilserviceService,
    private dialogRef: MatDialogRef<DialogUpdateDataComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tobeupdated = { ...data };
  }

  async ngOnInit() {
    this.uploadedFile = new Uploadedfile();
    this.oeuvre = new Oeuvre();
    this.oeuvreReponse = new Oeuvreresponse();
    this.artiste = new Artiste();
    this.artiste.mailArtiste = localStorage.getItem("email");
    this.oeuvre.artiste = this.artiste;
    this.type = new TypeOeuvre();
    this.style = new Style();
    this.materiaux = new Materiaux();
    this.oeuvre.libelleOeuvre = '';
    this.listTypes = await this.initType();
    this.listMats = await this.initMats();
    this.oeuvre = this.tobeupdated.dataToUpdate.oeuvre;
    this.oeuvre.artiste = this.artiste;
    console.log("data", this.tobeupdated.dataToUpdate.type_id);
  }

  fileName = '';
  file: File;
  changeValue(value: TypeOeuvre) {
    if (value) {
      this.showSelect = true;
      this.listStyles = value.styles;
      for (let element of this.listMats) {
        console.log("selected type");
        console.log("mat list", this.listMats)
        if (element.type.id === value.id) {
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

  async onFileSelected(event) {
    var file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.formData.append("file", file);
      this.oeuvre.imgOeuvre = file.name;
      this.utilservice.upload(this.formData).subscribe({
        next: async (response) => {
          await new Promise(f => setTimeout(f, 500));
          this.uploadedFile = await response;
          this.oeuvre.file = this.uploadedFile;
          this.oeuvre.imgOeuvre = "assets/pictures/" + file.name;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  async initType() {
    this.utilservice.getAllType().subscribe({
      next: (response) => {
        this.listTypes = response;
        console.log("list api", this.listTypes);
        this.listTypes.forEach(element => {
          if(element.id == this.tobeupdated.dataToUpdate.type_id) {
            this.type = element;
            this.oeuvre.type = this.type;
          }
        });
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

  updateOeuvre() {
    console.log("send update request :", this.oeuvre)
    this.utilservice.save(this.oeuvre).subscribe({
      next: async (response) => {
        await new Promise(f => setTimeout(f, 200));
        this.oeuvreReponse.oeuvre = response;
        console.log("returned to main component", this.oeuvreReponse);
        this.close();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  close() {
    this.dialogRef.close();
  }

}
