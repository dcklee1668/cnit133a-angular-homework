import { Component } from '@angular/core';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  members: any;

  constructor(private mydata: MydataService) { }

  ngOnInit(): void {
    this.mydata.getData().subscribe(mydata => {
      this.members = mydata
      console.log(this.members)
    })
  }
}
