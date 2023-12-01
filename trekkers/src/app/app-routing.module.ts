import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripComponent } from './trip/trip.component';
import { HomeComponent } from './home/home.component';
import { PackageComponent } from './package/package.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trip', component: TripComponent },
  { path: 'package', component: PackageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
