import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";
//http://i884.photobucket.com/albums/ac42/DanasANIMElove/Other/2010-04-02134640.jpg

@Component({
  selector: 'app-images-container',
  templateUrl: './images-container.component.html',
  styleUrls: ['./images-container.component.css']
})
export class ImagesContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('infinteList') infiniteList:any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadMore();
  }


  private loadMore(){
    let listElm = this.infiniteList.nativeElement;
    let nextItem = 1;
    // for (var i = 0; i < 10; i++) {
    //   let item = document.createElement('li');
    //   item.innerText = 'Item ' + nextItem++;
    //   listElm.appendChild(item);
    // }
    for (var i = 0; i < 10; i++) {
      let item = document.createElement('img');
      //item.setAttribute('src', 'http://lorempixel.com/50/50/animals/');
      item.src = 'src/app/images-container/img11.JPG';
      listElm.appendChild(item);
    }
    console.log("get element",listElm);

  }


// // Detect when scrolled to bottom.
//   private listElm.addEventListener('scroll', function() {
//   if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
//     loadMore();
//   }
// });


}
