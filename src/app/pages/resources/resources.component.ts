import { Component, OnInit } from '@angular/core';

const SPEC_TAB = 'spec';
const STOCK_TAB = 'stock';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html'
})
export class ResourcesComponent implements OnInit {

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
