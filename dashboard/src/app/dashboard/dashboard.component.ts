import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  
  onClickEvent(){

    const el = document.getElementById("wrapper");
    const toggleButton = document.getElementById("menu-toggle");
    console.log("el::"+el);
    el?.classList.toggle("toggled");
    
   
  }  
 

}


