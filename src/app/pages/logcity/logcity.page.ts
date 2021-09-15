import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logcity',
  templateUrl: './logcity.page.html',
  styleUrls: ['./logcity.page.scss'],
})
export class LogcityPage implements OnInit {

  data = [
    { ville: "الرباط", consomateur: 9000, vendeur: 36 },
    { ville: "سلا", consomateur: 5700, vendeur: 48 },
    { ville: "تمارة", consomateur: 3200, vendeur: 12 },
    { ville: "القنيطرة", consomateur: 7300, vendeur: 26 },
  ]

  constructor() { }

  ngOnInit() {
  }

}
