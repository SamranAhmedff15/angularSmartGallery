import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { OeuvreResponseMain } from '../oeuvre-response-main';
import { UtilserviceService } from '../utilservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened: boolean;
  mode: string;
  menubutton = true;
  isArtiste = false;
  badge_val : number;
  oeuvreRespponseMain: OeuvreResponseMain[] = [];
  @ViewChild('matDrawer', { static: false }) matDrawer: MatDrawer;
  constructor(private router: Router, private _snackBar: MatSnackBar, public utilservice: UtilserviceService) {

  }
  products: OeuvreResponseMain[]
  async ngOnInit() {
    if (localStorage.getItem("id") == null) {
      this.logout();
    }
    this.badge_val = Number(localStorage.getItem("cart"));
    await new Promise(f => setTimeout(f, 500));
    var holder = await this.loadAllArts();
    console.log(holder)
    this.products = holder
    console.log(this.products)
    if(localStorage.getItem("type") === 'artiste') {
      this.isArtiste = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  addToCart() {
    var cart = localStorage.getItem("cart");
    var num = Number(cart) +1;
    localStorage.setItem("cart", num.toString());
    this.badge_val = Number(localStorage.getItem("cart"));
  }

  async loadAllArts() {
      this.utilservice.getOeuvres().subscribe({
        next: (response) => {
          this.oeuvreRespponseMain = response;
          console.log("list oeuvres", this.oeuvreRespponseMain);
          this.products = this.oeuvreRespponseMain;
        },
        error: (error) => {
          console.log(error);
        }
      });
      return this.oeuvreRespponseMain;
    }
  }
