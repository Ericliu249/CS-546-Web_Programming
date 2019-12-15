import { TemplateComponent } from './../../../shared/layouts/template/template.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';
import {QuestionnaireComponent} from "./questionnaire.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "../../../auth/_guards/auth.guard";
import {CommonModule} from "@angular/common";

const routes: Routes = [
    {
        'path': '',
        'component': TemplateComponent,
        'children': [
            {
                'path': '',
                'component': QuestionnaireComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        QuestionnaireComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        AuthGuard
    ]
})
export class QuestionnaireModule {
}