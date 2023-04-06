import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(private router: ActivatedRoute) {}
  user!: { id: string; name: string; }; 
  handleClick() {
    //this.router.navigateByUrl('/categories')
    //this.router.navigate(['/categories'])
  }
  ngOnInit(): void {
    this.user = {
      id:this.router.snapshot.params['id'],
      name: this.router.snapshot.params['name']
    };
      this.router.params.subscribe((data: Params) => {
        this.user = {
          id: data['id'],
          name: data['name']
        }
      })
      this.router.queryParams.subscribe(data => {
        console.log(data);
      })

      this.router.fragment.subscribe(data => {
        console.log(data);
        
      })
  }
}
