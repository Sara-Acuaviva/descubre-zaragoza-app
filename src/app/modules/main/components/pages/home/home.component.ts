import { Component } from '@angular/core';
import { Event } from '../../../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventList: Event[] = [
    {
      image: 'https://a.cdn-hotels.com/gdcs/production10/d1442/77b32160-68ce-11e8-8a0f-0242ac11000c.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      title: 'prueba',
      date: 'abril 2023'
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1647972241104-KOC7JJGQUSPTJX8IAWZC/que-ver-en-zaragoza-pilar.jpg?format=1000w',
      title: 'prueba 00',
      date: 'abril 2023'
    }
  ];


}
