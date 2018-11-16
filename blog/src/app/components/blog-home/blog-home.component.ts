import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  @Input('filterText') filterText: string;

  //filterText: string;

  constructor() {
  }

  ngOnInit() {
  }

  getName($event) {
    this.filterText = $event;
  }


}
