import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditWishComponent } from './pages/edit-wish/edit-wish.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editwish/:wishId', component: EditWishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
