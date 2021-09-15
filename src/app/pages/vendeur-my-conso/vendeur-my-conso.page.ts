import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendeur-my-conso',
  templateUrl: './vendeur-my-conso.page.html',
  styleUrls: ['./vendeur-my-conso.page.scss'],
})
export class VendeurMyConsoPage implements OnInit {

  nbrConsomateurTotal = 674;
  data = [
    { jour: "الأثنين", zone: "حي أكدال" },
    { jour: "الثلاثاء", zone: "حي الرياض" },
    { jour: "الأربعاء", zone: "حي السويسي" },
    { jour: "الخميس", zone: "قصبة الأوداية حي" },
    { jour: "الجمعة", zone: "حي يعقوب المنصور" },
    { jour: "السبت", zone: "حي الفتح" },
    { jour: "الأحد", zone: "حي عكاري" },
  ];

  data2 = [
    { nom: "إبراهيم", dateInscription: "2021-09-05" },
    { nom: "حمزة", dateInscription: "2021-08-15" },
    { nom: "معاذ", dateInscription: "2021-09-08" },
    { nom: "أنس", dateInscription: "2021-10-18" },
    { nom: "خالد", dateInscription: "2021-07-09" },
    { nom: "حمزة عفافي", dateInscription: "2021-08-15" },
    { nom: "حمزة عفافي", dateInscription: "2021-08-15" },
    { nom: "حمزة عفافي", dateInscription: "2021-08-15" },
    { nom: "حمزة عفافي", dateInscription: "2021-08-15" },
    { nom: "حمزة عفافي", dateInscription: "2021-08-15" },
    { nom: "حمزة عفافي", dateInscription: "2021-08-15" },
  ]
  constructor() { }

  ngOnInit() {
  }


}
