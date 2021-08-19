import { Component, OnInit } from '@angular/core';
import {ResourcesService} from '../../../services/resources.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-resource-specs',
  templateUrl: './resource_specification.component.html',
  styleUrls: ['./resource_specification.component.scss']
})
export class ResourceSpecificationComponent implements OnInit {

  newResource;
  editResource;

  private _resources = [];

  constructor(private resourcesService: ResourcesService) {
    this.loadResources();
  }

  get resources() {
    return this._resources.reverse();
  }

  ngOnInit() {
  }

  new() {
    this.newResource = {code: '', name: '', measure_unit: '', package_size: null, price: null, comment: ''};
  }

  add() {
    this.resourcesService.newResource(this.newResource)
        .then(resourse => {
          this._resources.push(resourse);
          this.newResource = undefined;
        });
  }

  edit(resource) {
    this.editResource = resource;
  }

  makeEdition() {
    this.resourcesService.editResource(this.editResource)
        .then(this.replaceResource)
        .then(() => this.editResource = undefined);
  }

  private loadResources() {
    this.resourcesService.getResourceSpecs()
        .then((resources) => this._resources = resources);
  }

  private replaceResource = (resource) => {
    const index = _.findIndex(this._resources, (res) => res._id === resource._id);
    this._resources.splice(index, 1, resource);
  }

}
