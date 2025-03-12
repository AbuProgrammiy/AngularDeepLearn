import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  doSomething(something?:string){
    console.log(something, "hello")
  }
}
