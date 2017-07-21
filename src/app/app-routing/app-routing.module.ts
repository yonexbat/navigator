import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { ZoomComponent } from '../zoom/zoom.component';

const routes: Routes = [
  { path: 'detail/:id', component:  ContentComponent},
  { path: 'zoom', component: ZoomComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
})
export class AppRoutingModule { }
