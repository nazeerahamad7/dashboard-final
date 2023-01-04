import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickEvent(){

    const el = document.getElementById("wrapper");
    const toggleButton = document.getElementById("menu-toggle");
    console.log("el::"+el);
    el?.classList.toggle("toggled");
  }  

}
