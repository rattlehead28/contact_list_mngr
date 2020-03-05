import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { ContactListComponent } from './contact-list/contact-list.component';


const routes: Routes = [
  {
    path:'',
    component:ContactsComponent
  },
  {
    path:'contact-list',
    component:ContactListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
export const contactRouteModules = [ContactsComponent,ContactListComponent];