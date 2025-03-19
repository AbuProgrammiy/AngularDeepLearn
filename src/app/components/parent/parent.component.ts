import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  trigger(event?:Event){
    console.log("bosildima");
    console.log((event?.target as any).value);
  }

  value="Something"
  numberValue=10

  imgUrl="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww"
  isDisabled=true
  username="abuProgrammiy"
  isGreenClass=true
  textColor="blue"
  status="green"
  someText!:string
  selectedOption!:string

  changeStatus(){
    if(this.status=="green"){
      this.status="red"
    }
    else{
      this.status=""
    }
  }
}
