import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'video-js-player',
  templateUrl: './video-js-player.component.html',
  styleUrls: ['./video-js-player.component.scss']
})
export class VideoJsPlayerComponent implements OnInit {
  @ViewChild('videojsplayer') player;

  constructor() {
    console.log(this.player);
  }

  ngOnInit() {
  }

}
