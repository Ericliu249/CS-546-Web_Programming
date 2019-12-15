import { TemplateComponent } from '../../../shared/layouts/template/template.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ToplistComponent } from './toplist.component';

const routes: Routes = [
    {
        'path': '',
        'component': TemplateComponent,
        'children': [
            {
                'path': '',
                'component': ToplistComponent,
            }
        ],
    },
];

@NgModule({
    imports: [
        SharedModule, RouterModule.forChild(routes),
    ], exports: [
        RouterModule,
    ], declarations: [
        ToplistComponent,
    ],
})
export class ToplistModule {
}