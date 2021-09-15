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
      codeProduit: "AD2105444",
      category: "الشاي",
      qte: 20,
      prixUnitaire: 22.50
    },
    {
      img: "../../../assets/images/product/prod4.jpg",
      codeProduit: "AD2105444",
      category: "الشاي",
      qte: 32,
      prixUnitaire: 45.90
    },
    {
      img: "../../../assets/images/product/prod4.jpg",
      codeProduit: "AD2105444",
      category: "الشاي",
      qte: 32,
      prixUnitaire: 45.90
    },
    {
      img: "../../../assets/images/product/prod1.jpg",
      codeProduit: "AD2105444",
      category: "أدوات التنظيف",
      qte: 12,
      prixUnitaire: 30.10
    },
    {
      img: "../../../assets/images/product/prod2.jpg",
      codeProduit: "AD2105444",
      category: "الشاي",
      qte: 20,
      prixUnitaire: 22.50
    },
    {
      img: "../../../assets/images/product/prod4.jpg",
      codeProduit: "AD2105444",
      category: "الشاي",
      qte: 32,
      prixUnitaire: 45.90
    },
    {
      img: "../../../assets/images/product/prod2.jpg",
      codeProduit: "AD2105444",
      category: "الشاي",
      qte: 20,
      prixUnitaire: 22.50
    },
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

}
