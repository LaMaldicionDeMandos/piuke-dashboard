import {Component, OnInit, ViewChild} from '@angular/core';
import {PersonService} from '../../services/people.service';
import * as _ from 'lodash';

const DAILY_PERIOD = 'daily';
const WEEKLY_PERIOD = 'weekly';
const MONTHLY_PERIOD = 'monthly';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  private _people;

  @ViewChild('deletePersonModal') deletePersonModal;

  newPerson;
  editPerson;
  deletePerson;

  periods = [
    {code: DAILY_PERIOD, name: 'Diario'},
    {code: WEEKLY_PERIOD, name: 'Semanal'},
    {code: MONTHLY_PERIOD, name: 'Mensual'}
  ];

  constructor(private personService: PersonService) {
    this.loadPeople();
  }

  ngOnInit() {
  }

  get people() {
    return this._people.reverse();
  }

  new() {
    this.newPerson = {name: '', salary: null, period: null};
  }

  add() {
    this.personService.newPerson(this.newPerson)
        .then(person => {
          this._people.push(person);
          this.newPerson = undefined;
        });
  }

  edit(person) {
    console.log('Editando ' + person.name);
    this.editPerson = person;
  }

  makeEdition() {
    this.personService.editPerson(this.editPerson)
        .then(this.replacePerson)
        .then(() => this.editPerson = undefined);
  }

  get selectedPeriod() {
    return (this.newPerson && this.newPerson.period && this.newPerson.period.name) || 'Periodo';
  }

  selectPeriod(period) {
    this.newPerson.period = period;
  }

  updatePeriod(period) {
    this.editPerson.period = period;
  }

  salary(person) {
    switch (person.period.code) {
      case DAILY_PERIOD: return person.salary * 8;
      case WEEKLY_PERIOD: return person.salary * 40;
      case MONTHLY_PERIOD: return person.salary * 160;
    }
  }

  remove(person) {
    console.log(`elimino persona: ${person.name}`);
    this.deletePerson = person;
    this.deletePersonModal.show();
  }

  makePersonDeletion() {
    console.log('Se borra ' + this.deletePerson.name);
    this.personService.deletePerson(this.deletePerson)
        .then(() => _.remove(this._people, (res) => res._id === this.deletePerson._id));
    this.deletePersonModal.hide();
  }

  private loadPeople() {
    this.personService.getPeople().then(people => this._people = people);
  }

  private replacePerson = (person) => {
    const index = _.findIndex(this._people, (res) => res._id === person._id);
    this._people.splice(index, 1, person);
  }
}
