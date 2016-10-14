import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";
import { Inject } from "@angular/core";
import { HostListener} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
//http://i884.photobucket.com/albums/ac42/DanasANIMElove/Other/2010-04-02134640.jpg

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
      console.log("scroll top", scrollTop);
      console.log("scroll height", scrollHeight);
      this.loadMore();
    }
  }

  private listElm:any;
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.listElm = this.infiniteList.nativeElement;
    this.loadMore();
  }

  private loadMore(){
    let nextItem = 1;
    for (var i = 0; i < 10; i++) {
      if(nextItem==11){
        nextItem =1;
      }
      let item = document.createElement('img');
      item.src = 'https://raw.githubusercontent.com/ayu15/InfiniteImages/master/src/assets/images/img' + nextItem++ + '.jpg';
      item.className = "myImages";
      item.setAttribute('style', "width:40%; margin:5%");
      this.listElm.appendChild(item);
    }
  }
  private detectBottom() {
    //
    // if (this.listElm.scrollTop + this.listElm.clientHeight >= this.listElm.scrollHeight) {
    //   console.log("scrollTop", this.listElm.scrollTop);
    //   console.log("clientHeight", this.listElm.clientHeight);
    //   console.log("scrollHeight", this.listElm.scrollHeight);
    //
    // }
  };

}

