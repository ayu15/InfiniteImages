import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";
import { Inject } from "@angular/core";
import { HostListener} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-images-container',
  templateUrl: './images-container.component.html',
  styleUrls: ['./images-container.component.css']
})
export class ImagesContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('infinteList') infiniteList: any;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let scrollTop = this.document.body.scrollTop;
    let scrollHeight = this.document.body.scrollHeight;
    if (scrollTop + 800 >= scrollHeight) {
      this.loadMore();
    }
  }

  private listElm:any;
  private nextItem:number = 1;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.listElm = this.infiniteList.nativeElement;
    this.loadMore();
  }

  private loadMore(){
    for (let i = 0; i < 4; i++) {
      if(this.nextItem==11){
        this.nextItem =1;
      }
      let item = document.createElement('img');
      item.src = 'https://raw.githubusercontent.com/ayu15/InfiniteImages/master/src/assets/images/img' + this.nextItem++ + '.jpg';
      item.className = "myImages";
      item.setAttribute('style', "width:40%; margin:5%");
      this.listElm.appendChild(item);
    }
  }


}

