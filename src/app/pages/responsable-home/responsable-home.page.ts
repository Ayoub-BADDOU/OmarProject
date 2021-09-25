import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-responsable-home',
  templateUrl: './responsable-home.page.html',
  styleUrls: ['./responsable-home.page.scss'],
})
export class ResponsableHomePage implements OnInit {


  data = {
    jour: "الخميس",
    zone: "حي رحمة 1",
    responsable: "عمر",
    vendeur: "عبد القادر",
    noteJour: 1200,
    nbrTotalConso: 500,
    consoValide: 450,
    consoAttente: 48,
    consoRefuse: 2,
    demande: [
      {
        nomConso: "محمد",
        noteDemande: 40,
        prixDemande: 500,
        etatDemande: "V"
      },
      {
        nomConso: "محسين",
        noteDemande: 35,
        prixDemande: 350.60,
        etatDemande: "V"
      },
      {
        nomConso: "عادل",
        noteDemande: 0,
        prixDemande: 0,
        etatDemande: "A"
      },
      {
        nomConso: "طارق",
        noteDemande: 0,
        prixDemande: 0,
        etatDemande: "A"
      },
      {
        nomConso: "معاد",
        noteDemande: 0,
        prixDemande: 0,
        etatDemande: "R"
      },
    ]
  }

  data2 = [
    { vendeur: "إيمان أوفقير", zone: "حي أكدال" },
    { vendeur: "عبد الفتاح ارقياق", zone: "حي الفتح" },
    { vendeur: "مونية المنبهي", zone: "حي عكاري" }
  ]


  // role1 = "V";
  // role2 = "R";
  // user = this.role1 == "V" ? true : false;

  isShow: boolean = false;
  numClickMenu: number = 0;

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menu.enable(true, 'responsable-menu')
  }
  ionViewWillLeave() {
    this.menu.enable(false, 'responsable-menu')
  }
}
