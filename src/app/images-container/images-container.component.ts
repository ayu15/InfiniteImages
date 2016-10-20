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
    let clientHeight = window.screen.availHeight;
    let scrollHeight = this.document.body.scrollHeight;

    if (scrollTop + clientHeight + 300 >= scrollHeight) {
      this.loadMore();
      this.lazyLoad();
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
    this.loadMore();

  }

  private loadMore(){
    for (let i = 0; i < 4; i++) {
      if(this.nextItem==11){
        this.nextItem =1;
      }
      let item = document.createElement('img');
      item.setAttribute('data-src', 'assets/images/img' + this.nextItem++ + '.jpg?' +Date.now());
      item.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      item.className = "myImages";
      item.setAttribute('style', "width:40%; margin:5%");
      this.listElm.appendChild(item);
      if(this.nextItem==1){
        console.log("img", item);
      }
    }
    this.setLazy();
    this.lazyLoad();
  }

  private lazy: any= [];

  private setLazy(){
  this.lazy = document.getElementsByClassName('myImages');
}

  private lazyLoad(){
  for(var i=0; i<this.lazy.length; i++){
    if(this.isInViewport(this.lazy[i])){
      if (this.lazy[i].getAttribute('data-src')){
        this.lazy[i].src =
          this.lazy[i].getAttribute('data-src');

        // remove the attribute
        this.lazy[i].removeAttribute('data-src');
      }
    }
  }
  this.cleanLazy();
}

  private cleanLazy(){
  this.lazy =
    Array.prototype.filter.call(
      this.lazy,
      function(l){
        return l.getAttribute('data-src');
      }
    );
}

  private isInViewport(el){
  var rect = el.getBoundingClientRect();
    return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&

    rect.top <= (
    window.innerHeight ||
    document.documentElement.clientHeight) &&

    rect.left <= (
    window.innerWidth ||
    document.documentElement.clientWidth)
  );
}
}

