import { Component, OnInit } from '@angular/core';

const SPEC_TAB = 'spec';
const STOCK_TAB = 'stock';

@Component({
  selector: 'app-manufactires',
  templateUrl: './manufactures.component.html'
})
export class ManufacturesComponent implements OnInit {

  private tabItem = SPEC_TAB;

  constructor() {
  }

  ngOnInit() {
  }

  get selectedTab() {
    return this.tabItem;
  }

  tabSpec = () => this.tabItem = SPEC_TAB;
  tabStock = () => this.tabItem = STOCK_TAB;
}
