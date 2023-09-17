import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//const getById = 'https://www.zaragoza.es/sede/servicio/monumento/1.json'
//const getList = 'https://www.zaragoza.es/sede/servicio/monumento.json?rows=2'

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) { }

  getEventById() {   
    return []
  }

  getEventList() {
    
    return [
      {
        image:
          'https://a.cdn-hotels.com/gdcs/production10/d1442/77b32160-68ce-11e8-8a0f-0242ac11000c.jpg?impolicy=fcrop&w=800&h=533&q=medium',
        title: 'Evento 1',
        date: new Date('01/01/2023'),
      },
      {
        image:
          'https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1647972241104-KOC7JJGQUSPTJX8IAWZC/que-ver-en-zaragoza-pilar.jpg?format=1000w',
        title: 'Evento 2',
        date: new Date('12/12/2023'),
      },
    ];
  }
}
