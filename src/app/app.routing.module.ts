// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { RegistrationListComponent } from './registration-list/registration-list.component';
// import { RegistrationFormComponent } from './registration-form/registration-form.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'list', component: RegistrationListComponent },
//   { path: 'new', component: RegistrationFormComponent },
//   { path: 'edit/:id', component: RegistrationFormComponent },
// ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: RegistrationListComponent },
  { path: 'new', component: RegistrationFormComponent },
  { path: 'edit/:id', component: RegistrationFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}