import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'men/apparel-tops/t-shirts', component: AppComponent },
  { path: '',   redirectTo: 'men/apparel-tops/t-shirts', pathMatch: 'full' }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
