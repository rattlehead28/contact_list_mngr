import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule, contactRouteModules } from './contacts-routing.module';



@NgModule({
  declarations: [
    contactRouteModules
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
