import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss'],
    host: {
        'class': 'sidebar'
    },
    animations: [
        trigger('toggleSubMenu', [
            state('inactive', style({
                height: '0',
                opacity: '0'
            })),
            state('active', style({
                height: '*',
                opacity: '1'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})
export class SidebarComponent implements OnInit {
    /* Main Menu

     * title: Main menu title
     * icon: Menu icon from material-design-iconic-fonts. Please refer 'Icons' page for more details
     * route: Router link for page
     * sub: Sub menus
     * visibility: Property for animation. 'inactive' means the sub menu is hidden by default.

     */
    mainMenu: Array<any> = [
        {
            title: 'Materia Prima',
            icon: 'puzzle-piece',
            sub: [
                { title: 'Materia Prima', route: '/resources'},
                { title: 'Manufacturados', route: '/manufactures'}
            ]
        },
        {
            title: 'Maquinas',
            icon: 'input-power',
            route: '/machines'
        },
        {
            title: 'Personas',
            icon: 'account',
            route: '/people'
        },
        {
            title: 'Productos',
            icon: 'seat',
            route: '/products'
        },
        {
            title: 'Precios',
            icon: 'money',
            route: '/prices'
        },
        {
            title: 'Stock',
            icon: 'widgets',
            route: '/stock'
        },
        {
            title: 'Ventas',
            icon: 'shopping-basket',
            route: '/sales'
        },
        {
            title: 'Compras',
            icon: 'shopping-cart',
            route: '/buys'
        },
        {
            title: 'Stock de Productos',
            icon: 'widgets',
            route: '/stock'
        },
        {
            title: 'Saldo',
            icon: 'balance',
            route: '/balance'
        }
    ];

    // Toggle sub menu
    toggleSubMenu(i) {
        this.mainMenu[i].visibility = (this.mainMenu[i].visibility === 'inactive' ? 'active' : 'inactive');
    }

    constructor(private service: AppService) {
        this.mainMenu[0].visibility = 'active';
    }

    ngOnInit() {
    }

}
