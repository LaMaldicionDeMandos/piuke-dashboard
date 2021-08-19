import { Component, OnInit } from '@angular/core';
import {ResourcesService} from '../../../services/resources.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-manufactures-specs',
  templateUrl: './manufactures_specification.component.html',
  styleUrls: ['./manufactures_specification.component.scss']
})
export class ManufactureSpecificationComponent implements OnInit {

  newManufacture;
  editManufacture;

  private selectedRes;
  resources;

  private _manufactures = [];

  constructor(private resourcesService: ResourcesService) {
    this.loadManufactures();
    this.loadResources();
  }

  get manufactures() {
    return this._manufactures.reverse();
  }

  ngOnInit() {
  }

  new() {
    this.newManufacture = {code: '', name: '', resource: null, count: null, cost: null};
  }

  add() {
    this.newManufacture.cost = this.newManufacture.resource.price / this.newManufacture.resource.package_size / this.newManufacture.count;
    console.log('Nuevo manufacturado: ' + JSON.stringify(this.newManufacture));
    this.resourcesService.newManufacture(this.newManufacture)
        .then(manufacture => {
          this._manufactures.push(manufacture);
          this.newManufacture = undefined;
        });
  }

  edit(manufacture) {
    this.editManufacture = manufacture;
  }

  get enableNewManufacture(): boolean {
    return this.newManufacture && this.newManufacture.code && this.newManufacture.name && this.newManufacture.count
        && this.newManufacture.resource;
  }

  makeEdition() {
    /*
    this.resourcesService.editResource(this.editResource)
        .then(this.replaceResource)
        .then(() => this.editResource = undefined);

     */
  }

  get selectedResource() {
    return (this.newManufacture && this.newManufacture.resource && this.newManufacture.resource.name) || 'Materia Prima';
  }

  selectResource(resource) {
    this.selectedRes = resource;
    this.newManufacture.resource = resource;
  }

  makeManufactureDeletion() {
    /*
    console.log('Se borra ' + this.deleteMachine.name);
    this.machineService.deleteMachine(this.deleteMachine)
        .then(() => _.remove(this._machines, (res) => res._id === this.deleteMachine._id));
    this.deleteMachineModal.hide();

     */
  }

  remove(manufacture) {
    /*
    console.log(`elimino maquina: ${machine.name}`);
    this.deleteMachine = machine;
    this.deleteMachineModal.show();

     */
    console.log('Borrando manufactura ' + manufacture.name);
  }

  private loadManufactures() {
    /*
    this.resourcesService.getResourceSpecs()
        .then((resources) => this._resources = resources);

     */
  }

  private replaceManufacture = (manufacture) => {
    const index = _.findIndex(this._manufactures, (res) => res._id === manufacture._id);
    this._manufactures.splice(index, 1, manufacture);
  }

  private loadResources() {
    this.resourcesService.getResourceSpecs()
        .then(resources => _.map(resources, (res) => _.pick(res, ['_id', 'name', 'price', 'package_size', 'price'])))
        .then((resources) => this.resources = resources);
  }
}
