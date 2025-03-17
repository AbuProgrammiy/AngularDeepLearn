import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data:{count:number}={count:0}

  increment(){
    this.data.count++
    console.log(this.data);
    
  }

  newReferenceToObject(){
    this.data={count:this.data.count}
  }
}
