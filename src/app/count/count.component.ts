import { Component, OnInit } from '@angular/core';
import { Counttype } from '../models/count';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  
  counter!: Counttype;
  constructor() { }
  handleClick(event:any) {
  console.log(event);
  
  }

  ngOnInit() {
  }

}
