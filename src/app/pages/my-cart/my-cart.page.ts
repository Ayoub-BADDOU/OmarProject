import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  data = [
    {
      img: "../../../assets/images/product/prod2.jpg",
      nomProduit: "شاي لوبان الأخضر",
      qte: 20,
      prixUnitaire: 22.50,
      point: 3
    },
    {
      img: "../../../assets/images/product/prod4.jpg",
      nomProduit: "شاي الزعتر الزعيترة",
      qte: 32,
      prixUnitaire: 45.90,
      point: 2.5
    },
    {
      img: "../../../assets/images/product/prod4.jpg",
      nomProduit: "شاي الزعتر الزعيترة",
      qte: 32,
      prixUnitaire: 45.90,
      point: 2.5
    },
    {
      img: "../../../assets/images/product/prod1.jpg",
      nomProduit: "ليبتون 25 كيس",
      qte: 12,
      prixUnitaire: 30.10,
      point: 2
    },
    {
      img: "../../../assets/images/product/prod2.jpg",
      nomProduit: "شاي لوبان الأخضر",
      qte: 20,
      prixUnitaire: 22.50,
      point: 3
    },
    {
      img: "../../../assets/images/product/prod4.jpg",
      nomProduit: "شاي الزعتر الزعيترة",
      qte: 32,
      prixUnitaire: 45.90,
      point: 2.5
    },
    {
      img: "../../../assets/images/product/prod2.jpg",
      nomProduit: "شاي لوبان الأخضر",
      qte: 20,
      prixUnitaire: 22.50,
      point: 3
    }
  ]

  total: number = 0;
  showSuccessAlerte: boolean = false;
  showErrorAlerte: boolean = false;

  constructor(public alertIonic: AlertController) { }

  ngOnInit() {
    for (let i = 0; i < this.data.length; i++) {
      this.total += this.data[i].qte * this.data[i].prixUnitaire;
    }
  }


  msg = "سيتم إرسال طلبك إلى البائع الخاص بك، هل أنت متأكد من القيام بالشراء ؟"
  async sendProducts() {
    const alert = await this.alertIonic.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: this.msg,
      buttons: ['إلغاء', {
        text: 'تأكيد',
        handler: () => {
          this.showSuccessAlerte = true;
          this.data = []
          console.log("confirmé");

        }
      }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  qte: number = this.data[0].point;
  minusQty() {
    if (this.qte > 1) {
      this.qte = this.qte - 1;
      console.log(this.qte);
    }
    else {
      this.qte = 1;
    }
  }

  addQty() {
    this.qte = this.qte + 1;
  }
}
