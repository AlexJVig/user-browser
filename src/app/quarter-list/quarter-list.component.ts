import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quarter-list',
  templateUrl: './quarter-list.component.html',
  styleUrls: ['./quarter-list.component.css']
})
export class QuarterListComponent {

  @Input() From = 0;

  @Input() To = 0;

  @Output() clickOnGroupEvent = new EventEmitter<any>();

  constructor() { }

  clickOnGroup() {
    this.clickOnGroupEvent.emit({
      from: this.From,
      to: this.To,
      quarterNo: this.To / 3
    });
  }

}
