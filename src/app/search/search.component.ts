import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm = '';

  @Input() allGroups = [];

  @Output() searchEvent = new EventEmitter();

  constructor() { }

  onSearch(term: string) {
    term = term.trim();

    if (term) {
      let userList = [].concat.apply([], this.allGroups.map((g: any) => g.users))
        .filter((g: any) => g.name.toLowerCase().includes(term.toLowerCase()))
        .sort((a: any, b: any) => {
          let lastNameA = a.name.split(' ').slice(-1)[0];
          let lastNameB = b.name.split(' ').slice(-1)[0];

          if (lastNameA > lastNameB) {
            return 1
          }

          return -1;
      });

      this.searchEvent.emit({ users: userList });
    }
  }

}
