import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from 'src/app/contact/contact.component';


const routes: Routes = [ { path: 'contacts', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // je config "routes"
  exports: [RouterModule]
})
export class AppRoutingModule { } // on l'export la class pour quand puisse l'importer
