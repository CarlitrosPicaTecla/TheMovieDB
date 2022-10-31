import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/interfaces/actor.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

actorList: Actor[]=[];

  constructor(private actorservice : ActorService) { }

  ngOnInit() {
    this.getPeople(1);
  }


  getPeople(id : number){

    this.actorservice.getPeople(id).subscribe((resp)=>{
      this.actorList=resp.results

    });
  }
}
