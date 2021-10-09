import { Component, OnInit } from '@angular/core';
import { VilleQuartierService } from 'src/app/services/ville-quartier.service';

@Component({
  selector: 'app-logcity',
  templateUrl: './logcity.page.html',
  styleUrls: ['./logcity.page.scss'],
})
export class LogcityPage implements OnInit {

  data: any = []

  constructor(private V_Q_service: VilleQuartierService) {
    this.V_Q_service.getVilles().subscribe(res => {
      console.log("ttttt", res);
      this.data = res;
    })
  }

  ngOnInit() {
  }

}
