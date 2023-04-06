import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit{

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User Data Received')
    },3000)

  })
  filteredString: string = ''

  users = [{
    name:"Reshma Suresh",
    joiningDate:new Date(13,12,1222)
  },
  {
    name:"Rith",
    joiningDate:new Date(13,11,2020)
  },{
    name:"Saratha",
    joiningDate:new Date(11,12,1229)
  }]
  constructor() {}
  ngOnInit(): void {
    
  }

  onAddUser() {
    this.users.push({
      name:'sample',
      joiningDate:new Date(11,12,1229)
    })
  }

}
