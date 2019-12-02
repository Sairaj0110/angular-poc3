import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

compArray: User[] = [
  {name:"Sairaj", age:28},
  {name:"Neha", age:28}
]

}
