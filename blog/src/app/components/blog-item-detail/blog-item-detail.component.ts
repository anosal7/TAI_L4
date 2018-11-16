import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {
  id;
  post;

  constructor(private _Activatedroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    // this.postsService.get(this.id).subscribe(post => console.log(post));
    //this.post = this.postsService.get(this.id).subscribe(result => {
      //this.post = result;
    //});
    console.log(this.post);
  }

}
