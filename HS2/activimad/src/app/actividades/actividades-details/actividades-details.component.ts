import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ActivimadService } from '../../services/activimad.service';

@Component({
  selector: 'app-actividades-details',
  templateUrl: './actividades-details.component.html',
  styleUrls: ['./actividades-details.component.css']
})
export class ActividadesDetailsComponent implements OnInit {
  event: any;
  constructor(private route: ActivatedRoute, private activS: ActivimadService) {
   }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.activS.getEvento(id).then(
      response =>  {
        console.dir(response);
        this.event = response;
      }
    );
  }

}
