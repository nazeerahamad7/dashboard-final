import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

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
