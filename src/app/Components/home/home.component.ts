import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  check:boolean=false;
  changeOwner(){
    if(this.check){
      document.getElementById("num1").classList.remove("d-none");
      document.getElementById("num2").classList.add("d-none");
      this.check=false;
    }
    else{
      document.getElementById("num2").classList.remove("d-none");
      document.getElementById("num1").classList.add("d-none");
      this.check=true;
    }
  }

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function() {
      $(".skitter-large").skitter(
        {
          with_animations: ["swapBarsBack","swapBlocks","cubeStop"],
        }
      );
    });

  }

}
