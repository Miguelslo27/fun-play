import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {

  @Input('streamlist') streamList: any = [];

  constructor() { }

  ngOnInit() {
  }

}
