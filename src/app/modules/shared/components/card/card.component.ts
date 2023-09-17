import { Component, Input } from '@angular/core';
import { CulturalEvent, Monument } from 'src/app/modules/main/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  monument!: Monument;

}
