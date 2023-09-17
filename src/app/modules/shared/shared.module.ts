import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { CardHorizontalComponent } from './components/card-horizontal/card-horizontal.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    CardComponent,
    CardHorizontalComponent
  ]
})
export class SharedModule { }
