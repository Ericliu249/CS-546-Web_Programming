import { TemplateComponent } from './../../../shared/layouts/template/template.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';
import {PlaceComponent} from "./place.component";
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        'path': '',
        'component': TemplateComponent,
        'children': [
            {
                'path': '',
                'component': PlaceComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        SharedModule, RouterModule.forChild(routes), FormsModule
    ], exports: [
        RouterModule,
    ], declarations: [
        PlaceComponent,
    ],
})
export class PlaceModule {
}