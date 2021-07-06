import { Component, OnInit } from '@angular/core';
import { GetUsersService } from './get-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GetUsersService ]
})
export class AppComponent implements OnInit {

  currentFrom = 0;

  currentTo = 0;

  groupList = [];
  
  constructor(private service: GetUsersService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe((data: any) => this.groupList = data);
  }

  QuarterCount = [1, 4, 7, 10];

  changeGroup(eventArgs: any) {
    this.currentFrom = eventArgs.from;
    this.currentTo = eventArgs.to;
  }

}
