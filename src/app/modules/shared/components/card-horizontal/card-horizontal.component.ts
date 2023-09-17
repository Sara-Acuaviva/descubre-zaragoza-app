import { Component, Input } from '@angular/core';
import { Monument } from 'src/app/modules/main/types';

@Component({
  selector: 'app-card-horizontal',
  templateUrl: './card-horizontal.component.html',
  styleUrls: ['./card-horizontal.component.css']
})
export class CardHorizontalComponent {
  @Input()
  place!: Monument;

}
