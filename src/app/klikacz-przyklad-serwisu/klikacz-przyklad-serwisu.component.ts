import { Component, OnInit } from '@angular/core';
import {ClickService} from "../services/click/click.service";

@Component({
  selector: 'app-klikacz-przyklad-serwisu',
  templateUrl: './klikacz-przyklad-serwisu.component.html',
  styleUrls: ['./klikacz-przyklad-serwisu.component.css']
})
export class KlikaczPrzykladSerwisuComponent implements OnInit {

  allCLicks: number;

  constructor(private clickService:  ClickService) {

  }

  ngOnInit() {
    // nasluchujemy caly czas czy obserwator zwrocil info, że nasza zmienna zostala zmieniona
    this.clickService.getSum().subscribe(value => {
      this.allCLicks = value;
    });
  }

}
