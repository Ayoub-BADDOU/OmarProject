import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  commandeNum: number = 0;

  data = [
    { nom: "ليبتون 25 كيس", prixFinal: "27.60", prixInitial: "33.10", reduction: ((1 - (27.70 / 33.10)) * 100).toFixed(0), ref: "../../../assets/images/product/prod1.jpg" },
    { nom: "شاي لوبان الأخضر ", prixFinal: "79.00", prixInitial: "86.60", reduction: ((1 - (79.00 / 86.60)) * 100).toFixed(0), ref: "../../../assets/images/product/prod2.jpg" },
    { nom: "الاتقان الشاي الأخضر", prixFinal: "19.50", prixInitial: "", reduction: (0 * 100).toFixed(0), ref: "../../../assets/images/product/prod3.jpg" },
    { nom: "شاي الزعتر الزعيترة", prixFinal: "24.90", prixInitial: "99.00", reduction: ((1 - (24.90 / 99.00)) * 100).toFixed(0), ref: "../../../assets/images/product/prod4.jpg" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
