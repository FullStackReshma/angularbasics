import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent {
  title: string = "my app"
  number: number = 1;
  numberTwo: number = 2;
  favAnimal: string = "Lion";
  pock: string = ""
  imgSrc: string = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  handleClick(value: any) {
    //console.log("value::", value);
  };
  sayMessage() {
    alert( 'hello world');
  }
  handleChange(event:any) {
    this.myName = event.target.value
  }
  myName:string='';

  
 
  constructor() {

  }

}
