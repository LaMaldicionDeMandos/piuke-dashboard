import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import {PeopleComponent} from './people.component';

const PEOPLE_ROUTE = [{path: '', component: PeopleComponent}];

@NgModule({
    declarations: [PeopleComponent],
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        RouterModule.forChild(PEOPLE_ROUTE),
        BsDropdownModule.forRoot(),
    ]
})
export class PeopleModule {
}
