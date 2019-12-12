import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/_guards/auth.guard';
import {AdminComponent} from './admin.component';

const routes: Routes = [
    {
        'path': '',
        'component': AdminComponent,
        'canActivate': [AuthGuard],
        'children': [
            {
                'path': 'admin',
                'loadChildren': '.\/pages\/dashboard\/dashboard.module#DashboardModule'
            },
            /*{
                'path': 'admin1/:location',
                'loadChildren': '.\/pages\/dashboard\/dashboard.module#DashboardModule'
            },*/
            {
                'path': 'onedaylist/:id',
                'loadChildren': '.\/pages\/oneDayList\/oneDayList.module#OneDayListModule'
            },
            {
                'path': 'place/:id',
                'loadChildren': '.\/pages\/place\/place.module#PlaceModule'
            },
            {
                'path': '',
                'redirectTo': 'admin',
                'pathMatch': 'full',
            },
        ],
    },
    {
        'path': '**',
        'redirectTo': 'admin',
        'pathMatch': 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {
}