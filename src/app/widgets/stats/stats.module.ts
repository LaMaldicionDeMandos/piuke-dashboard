import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StatsComponent} from './stats.component';
import {ChartistModule} from 'ng-chartist';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        StatsComponent
    ],
    imports: [
        CommonModule,
        ChartistModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
    ],
    exports: [
        StatsComponent
    ]
})
export class StatsModule {
}
