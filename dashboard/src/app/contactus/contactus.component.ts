import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

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
