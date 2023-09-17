import { Component } from '@angular/core';
import { CulturalEvent, Monument } from '../../../types';
import { MonumentService } from '../../../services/monument.service';
import { EventService } from '../../../services/event.service';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  monumentList!: Monument[];
  eventList!: CulturalEvent[];
  mapIcon=faMap; 
  listIcon = faList;

  constructor(private monumentService: MonumentService, private eventService: EventService) {
    this.eventList = this.eventService.getEventList()

    this.getMonuments()
  }


  getMonuments(){
    this.monumentService.getMonumentList().subscribe({
      next: (v: { result: Monument[]}) => {
        console.log(v);
        this.monumentList = v.result;
      },
      error: (e) => {console.log(e)}
    })
  }
}

