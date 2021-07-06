import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quarter-list',
  templateUrl: './quarter-list.component.html',
  styleUrls: ['./quarter-list.component.css']
})
export class QuarterListComponent implements OnInit {

  @Input() From = 0;

  @Input() To = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
