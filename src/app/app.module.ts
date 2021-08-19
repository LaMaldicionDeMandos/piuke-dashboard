import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import {AppService} from './app.service'
import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {SearchComponent} from './layout/header/search/search.component';
import {LogoComponent} from './layout/header/logo/logo.component';
import {NavigationTriggerComponent} from './layout/header/navigation-trigger/navigation-trigger.component';
import {UserComponent} from './layout/sidebar/user/user.component';
import {PageLoaderComponent} from './layout/page-loader/page-loader.component';

import {Layout1Component} from './layout/layouts/layout-1/layout.component';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {AppRoutingModule} from './app-routing.module';

import {ResourcesService} from './services/resources.service';
import {MachinesService} from './services/machines.service';
import {PersonService} from './services/people.service';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        Layout1Component,
        SearchComponent,
        LogoComponent,
        NavigationTriggerComponent,
        UserComponent,
        PageLoaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        NgScrollbarModule,
        BsDropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        HttpClientModule
    ],
    providers: [AppService, ResourcesService, MachinesService, PersonService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
