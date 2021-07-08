import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GetUsersService } from './get-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GetUsersService ]
})
export class AppComponent implements OnInit {

  @Output() groupChangedEvent = new EventEmitter<any>();

  QuarterCount = [1, 4, 7, 10];

  currentFrom = 0;

  currentTo = 0;

  groupList = [];

  selectedGroup: any;

  selectedUser: any;
  
  constructor(private service: GetUsersService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe((data: any) => this.groupList = data);
  }

  changeGroup(eventArgs: any) {
    if (eventArgs.from && eventArgs.to) {
      this.selectedGroup = this.groupList.find((g: any) => {
        if (g.from === eventArgs.from && g.to === eventArgs.to)
          return true;

          return false;
      });
    } else {
      this.selectedGroup = eventArgs;
    }
  }

  displayUser(user: any) {
    this.selectedUser = user;
  }

}
