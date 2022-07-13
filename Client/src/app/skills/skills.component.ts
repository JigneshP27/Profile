import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  
  countStar(star) {
      this.selectedValue = star;
    }
  
  addClass(star) {
     let ab = "";
     for (let i = 0; i < star; i++) {
       ab = "starId" + i;
       document.getElementById(ab).classList.add("selected");
     }
  }
  removeClass(star) {
     let ab = "";
     for (let i = star-1; i >= this.selectedValue; i--) {
       ab = "starId" + i;
       document.getElementById(ab).classList.remove("selected");
     }
  }
}
