import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  isShow: boolean = false;
  numClickMenu: number = 0;

  data = [
    { category: "الخضر", ref: "../../../assets/images/category/cat1.png" },
    { category: "الفواكه", ref: "../../../assets/images/category/cat2.png" },
    { category: "الدقيق", ref: "../../../assets/images/category/cat3.png" },
    { category: "اللحوم", ref: "../../../assets/images/category/cat4.png" },
    { category: "الشاي", ref: "../../../assets/images/category/cat5.png" },
  ]

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.numClickMenu++;
    this.isShow = this.numClickMenu % 2 == 0 ? false : true;
    console.log(this.isShow, this.numClickMenu);
  }

}
