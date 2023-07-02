import { Component, Input } from '@angular/core';
import { Event } from 'src/app/modules/main/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  event!: Event; 
}
