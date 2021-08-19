import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {MachinesComponent} from './machines.component';

import {VisitorsModule} from '../../widgets/visitors/visitors.module';
import {SalesStatisticsModule} from '../../widgets/sales-statistics/sales-statistics.module';
import {GrowthRateModule} from '../../widgets/growth-rate/growth-rate.module';
import {FeaturedPostModule} from '../../widgets/featured-post/featured-post.module';
import {TodoModule} from '../../widgets/todo/todo.module';
import {PastDaysModule} from '../../widgets/past-days/past-days.module';
import {RecentPostsModule} from '../../widgets/recent-posts/recent-posts.module';
import {PieGridsModule} from '../../widgets/pie-grids/pie-grids.module';
import {StatsModule} from '../../widgets/stats/stats.module';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

const MACHINES_ROUTE = [{path: '', component: MachinesComponent}];

@NgModule({
    declarations: [MachinesComponent],
    imports: [
        CommonModule,
        FormsModule,
        StatsModule,
        SalesStatisticsModule,
        GrowthRateModule,
        FeaturedPostModule,
        TodoModule,
        PastDaysModule,
        RecentPostsModule,
        VisitorsModule,
        PieGridsModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        RouterModule.forChild(MACHINES_ROUTE),
        BsDropdownModule.forRoot(),
    ]
})
export class MachinesModule {
}
