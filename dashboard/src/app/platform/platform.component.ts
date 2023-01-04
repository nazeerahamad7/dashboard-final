import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

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
