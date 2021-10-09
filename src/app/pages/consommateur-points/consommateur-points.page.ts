import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consommateur-points',
  templateUrl: './consommateur-points.page.html',
  styleUrls: ['./consommateur-points.page.scss'],
})
export class ConsommateurPointsPage implements OnInit {

  data = [
    {
      numCommande: "C011020210001",
      date: "01-10-2021",
      point: 120
    },
    {
      numCommande: "C021020210048",
      date: "02-10-2021",
      point: 120
    },
    {
      numCommande: "C031020210051",
      date: "03-10-2021",
      point: 120
    },
    {
      numCommande: "C041020210083",
      date: "04-10-2021",
      point: 120
    },
    {
      numCommande: "C041020210083",
      date: "04-10-2021",
      point: 120
    },
    {
      numCommande: "C041020210083",
      date: "04-10-2021",
      point: 120
    },
    {
      numCommande: "C041020210083",
      date: "04-10-2021",
      point: 120
    },
    {
      numCommande: "C041020210083",
      date: "04-10-2021",
      point: 120
    },
    {
      numCommande: "C041020210083",
      date: "04-10-2021",
      point: 120
    },
    {
      numCommande: "C041020210083",
      date: "04-10-2021",
      point: 120
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
