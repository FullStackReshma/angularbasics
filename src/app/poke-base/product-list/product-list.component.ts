import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Poke } from 'src/app/models/poke';
import { PokeService } from 'src/app/services/poke-service/poke.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit { 

  pokes!:Poke[];
  constructor(private pokeService:PokeService) {};

  handleRemove(event: Poke) {
    this.pokes = this.pokes.filter((poke:Poke) => {
      return poke.id !== event.id;
    })
  }

ngOnInit(): void {
  //before observables 
  // this.pokes = this.pokeService.getPokes()

  //after observables
   this.pokeService.getPokes().subscribe((data:Poke[]) => {
    //console.log("data::",data);
    this.pokes = data;
    
   })
};

}
