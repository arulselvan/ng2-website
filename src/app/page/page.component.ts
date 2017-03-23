import { Component, OnInit } from '@angular/core';
import {Page} from './page';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {PageService} from './page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers:[PageService]
})

export class PageComponent implements OnInit {

  page:Page;
  constructor(private pageService:PageService,private route:ActivatedRoute) { }

  getPage(slug){
    this.pageService
      .getPage(slug)
      .subscribe(res => {
        this.page = res[0];
      });
  }
  ngOnInit() {

    this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       this.getPage(slug)
    });
  }

}
