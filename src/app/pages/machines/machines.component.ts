import {Component, OnInit, ViewChild} from '@angular/core';
import {MachinesService} from '../../services/machines.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  @ViewChild('electricalModal') electricalModal;
  @ViewChild('deleteMachineModal') deleteMachineModal;
  cost;

  newMachine;
  editMachine;
  deleteMachine;

  private _machines = [];

  constructor(private machineService: MachinesService) {
    this.machineService.getElectricalCost().then(cost => this.cost = cost);
    this.loadMachines();
  }

  get machines() {
    return this._machines.reverse();
  }

  ngOnInit() {
  }

  changeEnergyCost(cost) {
    this.electricalModal.hide();
    this.machineService.updateElectricalCost(cost)
        .then(newCost => this.cost = newCost);
  }

  new() {
    this.newMachine = {name: '', consumption: ''};
  }

  add() {
    this.machineService.newMachine(this.newMachine)
        .then(machine => {
          this._machines.push(machine);
          this.newMachine = undefined;
        });
  }

  edit(machine) {
    console.log(`Edito maquina: ${machine.name}`);
    this.editMachine = machine;
  }

  makeEdition() {
    this.machineService.editMachine(this.editMachine)
        .then(this.replaceMachine)
        .then(() => this.editMachine = undefined);
  }

  makeMachineDeletion() {
    console.log('Se borra ' + this.deleteMachine.name);
    this.machineService.deleteMachine(this.deleteMachine)
        .then(() => _.remove(this._machines, (res) => res._id === this.deleteMachine._id));
    this.deleteMachineModal.hide();
  }

  remove(machine) {
    console.log(`elimino maquina: ${machine.name}`);
    this.deleteMachine = machine;
    this.deleteMachineModal.show();
  }

  private loadMachines() {
    this.machineService.getMachines().then(machines => this._machines = machines);
  }

  private replaceMachine = (machine) => {
    const index = _.findIndex(this._machines, (res) => res._id === machine._id);
    this._machines.splice(index, 1, machine);
  }
}
