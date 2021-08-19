import { Component, OnInit } from '@angular/core';
import {ResourcesService} from '../../../services/resources.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-resource-stock',
  templateUrl: './resource_stock.component.html',
  styleUrls: ['./resource_stock.component.scss']
})
export class ResourceStockComponent implements OnInit {

  newStock;
  items = [];
  newStockResources;
  private selectedRes;

  resources;
  currentStock;

  constructor(private resourcesService: ResourcesService) {
    this.loadResources();
    this.getLastStock();
  }

  ngOnInit() {}

  new() {
    this.newStock = {code: null, name: null, stock: null, measure_unit: null};
    this.newStockResources = _.clone(this.resources);
  }

  add() {
    this.items.push(this.newStock);
    _.remove(this.newStockResources, (r) => r.code === this.selectedRes.code);
    this.newStock = {code: null, name: null, stock: null, measure_unit: null};
  }

  finish() {
    this.resourcesService.newStock(this.items)
        .then((stock) => {
          console.log('Stock generado: ' + JSON.stringify(stock));
          this.items = [];
          return stock;
        })
        .then(stock => this.currentStock = stock);
  }

  get selectedResource() {
    return (this.newStock && this.newStock.name) || 'Materia Prima';
  }

  get validateStock() {
    return  _.isEmpty(this.newStockResources);
  }

  selectResource(resource) {
    this.selectedRes = resource;
    this.newStock.code = resource.code;
    this.newStock.name = resource.name;
    this.newStock.measure_unit = resource.measure_unit;
  }

  private loadResources() {
    this.resourcesService.getResourceSpecs()
        .then((resources) => this.resources = resources);
  }

  private getLastStock() {
    this.resourcesService.currentStock()
        .then(stock => this.currentStock = stock);
  }
}
