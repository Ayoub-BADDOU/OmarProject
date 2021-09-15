import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vendeur-addproduct',
  templateUrl: './vendeur-addproduct.page.html',
  styleUrls: ['./vendeur-addproduct.page.scss'],
})
export class VendeurAddproductPage implements OnInit {

  showErrorAlerte: boolean = false;
  showSuccessAlerte: boolean = false;

  constructor(public alertIonic: AlertController) { }

  ngOnInit() {
  }


  // modelMsg = "تم إرسال المنتج إلى الإدارة، سيتم نشره إلى عملائك  بعد التأكيد."
  msg = "هل أنت متأكد من صحة المعلومات التي قمت بإدخالها لنشر المنتج ؟"
  async pushProduct() {
    const alert = await this.alertIonic.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: this.msg,
      buttons: ['إلغاء', {
        text: 'تأكيد',
        handler: () => {
          this.showSuccessAlerte = true;
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
