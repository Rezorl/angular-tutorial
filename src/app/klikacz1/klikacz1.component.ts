import { Component, OnInit } from '@angular/core';
import {ClickService} from "../services/click/click.service";

@Component({
  selector: 'app-klikacz1',
  templateUrl: './klikacz1.component.html',
  styleUrls: ['./klikacz1.component.css']
  //providers: [ClickService]
})
export class Klikacz1Component implements OnInit {

  click: number =0;

  constructor(private clickService: ClickService) {

  }

  ngOnInit() {
  }

  add() {
    this.click +=1;
    this.clickService.addClicks();
  }
}
