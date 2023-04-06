import { Component, OnInit } from '@angular/core';
import { Poke, Poketype } from '../../models/poke';
import { PokeService } from '../../services/poke-service/poke.service';

@Component({
  selector: 'app-poke-template-form',
  templateUrl: './poke-template-form.component.html',
  styleUrls: ['./poke-template-form.component.css']
})
export class PokeTemplateFormComponent implements OnInit {
  poke!: Poke;

  pokeType: Poketype[] =[
    {
      key:0,
      value:'fire'
    },{
      key:1,
      value:'water'
    },{
      key:2,
      value:'air'
    }
  ]

  constructor(private pokeService:PokeService) { }

  toggleIsCool(object :any) {
   // console.log(object);
    
  }

  handleSubmit(object:any) {
   // console.log(object);
    
  }
  ngOnInit() {
    this.pokeService.getPokeId(1).subscribe((data : Poke) => {
      this.poke = data
      //console.log("Data",data);
      
    });
  }

}
