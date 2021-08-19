import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {ResourcesComponent} from './resources.component';

import {VisitorsModule} from '../../widgets/visitors/visitors.module';
import {QuickStatsModule} from '../../widgets/quick-stats/quick-stats.module';
import {SalesStatisticsModule} from '../../widgets/sales-statistics/sales-statistics.module';
import {GrowthRateModule} from '../../widgets/growth-rate/growth-rate.module';
import {FeaturedPostModule} from '../../widgets/featured-post/featured-post.module';
import {TodoModule} from '../../widgets/todo/todo.module';
import {PastDaysModule} from '../../widgets/past-days/past-days.module';
import {RecentPostsModule} from '../../widgets/recent-posts/recent-posts.module';
import {PieGridsModule} from '../../widgets/pie-grids/pie-grids.module';
import {ResourceSpecificationComponent} from './specs/resource_specification.component';
import {ResourceStockComponent} from './stock/resource_stock.component';

const RESOURCES_ROUTE = [{path: '', component: ResourcesComponent}];

@NgModule({
    declarations: [ResourcesComponent, ResourceSpecificationComponent, ResourceStockComponent],
    imports: [
        CommonModule,
        FormsModule,
        QuickStatsModule,
        SalesStatisticsModule,
        GrowthRateModule,
        FeaturedPostModule,
        TodoModule,
        PastDaysModule,
        RecentPostsModule,
        VisitorsModule,
        PieGridsModule,
        RouterModule.forChild(RESOURCES_ROUTE),
        BsDropdownModule.forRoot()
    ]
})
export class ResourcesModule {
}
