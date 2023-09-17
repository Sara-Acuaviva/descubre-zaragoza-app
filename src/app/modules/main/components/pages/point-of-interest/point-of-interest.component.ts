import { Component } from '@angular/core';
import { MonumentService } from '../../../services/monument.service';
import { Monument } from '../../../types';

@Component({
  selector: 'app-point-of-interest',
  templateUrl: './point-of-interest.component.html',
  styleUrls: ['./point-of-interest.component.css']
})
export class PointOfInterestComponent {
 monumentList!: Monument[];
 
 constructor(private monumentService: MonumentService) {
  this.monumentService.getMonumentList().subscribe({
    next: (v: { result: Monument[]}) => {
      console.log(v);
      this.monumentList = v.result;
    },
    error: (e) => {console.log(e)}
  })

}


}
