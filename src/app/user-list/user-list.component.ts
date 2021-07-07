import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() displayGroup: any;

  @Output() userSelectedEvent = new EventEmitter<any>();

  constructor() { }

  onUserSelected(user: any) {
    this.userSelectedEvent.emit(user);
  }

}
