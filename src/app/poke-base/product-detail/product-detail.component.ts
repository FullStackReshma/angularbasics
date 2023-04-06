import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poke } from 'src/app/models/poke';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  detail!: Poke;

  @Output()
  remove:EventEmitter<any> = new EventEmitter();
  constructor() { };

  ngOnInit(): void { };
  onRemove() {
       this.remove.emit(this.detail)
  }
  

}
