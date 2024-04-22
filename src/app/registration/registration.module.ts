import { NgModule } from "@angular/core";
import { RegistrationFormComponent } from "../registration-form/registration-form.component";
import { RegistrationListComponent } from "../registration-list/registration-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomeModule } from '../home/home.module';

@NgModule({
    declarations: [RegistrationFormComponent, RegistrationListComponent],
    imports: [ CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HomeModule,
    ],
})
export class RegistrationModule {}