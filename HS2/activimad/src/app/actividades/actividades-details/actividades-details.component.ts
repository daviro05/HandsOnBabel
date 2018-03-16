import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ActivimadService } from '../../services/activimad.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-actividades-details',
  templateUrl: './actividades-details.component.html',
  styleUrls: ['./actividades-details.component.css']
})
export class ActividadesDetailsComponent implements OnInit {
  event: any;
  aComms: Array<any>;
  constructor(private route: ActivatedRoute, private activS: ActivimadService, private postS: PostService) {
   }

  ngOnInit() {
    this.cambioActv();
  }

  cambioActv() {
    const id = this.route.snapshot.paramMap.get('id');
    this.activS.getEvento(id).then(
      response =>  {
        this.event = response;
        this.event.dtstart = this.event.dtstart.substring(0, this.event.dtstart.length - 5);
        this.event.dtend = this.event.dtend.substring(0, this.event.dtend.length - 5);
      }
    );
    this.postS.getPostsFromIdEvent(id).then(
      response =>  {
        this.aComms = response;
      }
    );
  }
}
