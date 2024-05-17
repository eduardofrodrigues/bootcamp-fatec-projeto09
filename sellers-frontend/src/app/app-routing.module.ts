import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellersTableComponent } from './components/sellers-table/sellers-table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sellers', component: SellersTableComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
