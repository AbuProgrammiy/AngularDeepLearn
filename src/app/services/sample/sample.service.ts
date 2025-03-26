import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  public sayHello(){
    console.log("hello bunny");
  }
}
