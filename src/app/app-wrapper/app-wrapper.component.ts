import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.css']
})
export class AppWrapperComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
