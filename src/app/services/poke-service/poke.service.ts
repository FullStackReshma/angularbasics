import { Injectable } from '@angular/core';
import { Poke } from '../../models/poke';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const POKE_API = 'http://localhost:3000/poke'

@Injectable({
  providedIn: 'root'
})
export class PokeService {

constructor(private http: HttpClient) { }
//before observables

// getPokes() : Poke[] {
//   return [{
//     id: 1,
//     name: "resh",
//     type: "normal",
//     isCool: true,
//     isStylish: false
//   }, {
//     id: 2,
//     name: "rith",
//     type: "hard",
//     isCool: true,
//     isStylish: false
//   }, {
//     id: 3,
//     name: "zez",
//     type: "hard",
//     isCool: false,
//     isStylish: true
//   }]

// }

//after observables
getPokeId(id:number): Observable<Poke> {
  return this.http.get<Poke>(`${POKE_API}/1`);

}
getPokes() : Observable<Poke[]> {
 return this.http.get<Poke[]>(POKE_API);
}


}
