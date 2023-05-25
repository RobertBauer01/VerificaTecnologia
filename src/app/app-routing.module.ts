import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistiComponent } from './artisti/artisti.component';
import { BraniComponent } from './brani/brani.component';

const routes: Routes = [
  { path: 'artisti', component: ArtistiComponent},
  { path: 'brani', component: BraniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
