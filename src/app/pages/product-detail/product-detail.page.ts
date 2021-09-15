import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {



  data = {
    imgs: [
      "../../../assets/images/productDetail/prod-detail1.jpg",
      "../../../assets/images/productDetail/prod-detail2.png",
      "../../../assets/images/productDetail/prod-detail3.png"
    ].reverse(),
    productInfos: {
      nom: "ليبتون 25 كيس",
      prixInitial: (33.10).toFixed(2),
      prixFinal: (27.60).toFixed(2),
      category: "الشاي",
      description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه."
    },
    vendeurInfos: {
      nom: "عبد القادر الجلالي",
      num: "0" + (622556677).toFixed(0)
    }
  }

  slideOpts = {
    initialSlide: this.data.imgs.length - 1,
    speed: 400,
  };

  qte: number = 1;
  commandeNum: number = 0

  constructor() { }

  ngOnInit() {
  }

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

  addToCart() {
    this.commandeNum++;
  }

}
