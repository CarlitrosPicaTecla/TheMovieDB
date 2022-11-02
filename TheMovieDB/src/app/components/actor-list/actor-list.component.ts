import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actor, KnownFor } from 'src/app/models/interfaces/actor.interface';
import { ActorService } from 'src/app/services/actor.service';
import { ActorInfoComponent } from '../actor-info/actor-info.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

actorList: Actor[]=[];
pageActual: number=1;
numPagesTotal: number=0;
select: Actor | undefined;

  constructor(private actorservice : ActorService,  public dialog: MatDialog) { }

  ngOnInit() {
    this.getPeople(this.pageActual);
    this.getPeoplePage(this.pageActual);
  
  }


  getPeople(id : number){

    this.actorservice.getPeople(id).subscribe((resp)=>{
      this.actorList=resp.results

    });
  }

  nextPage() {
    if (this.pageActual < this.numPagesTotal) {
      this.pageActual = this.pageActual + 1;
      this.actorservice.getPeople(this.pageActual).subscribe((res) => {
        this.actorList = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }
  backPage() {
    if (this.pageActual > 1) {
      this.pageActual = this.pageActual - 1;
      this.actorservice.getPeople(this.pageActual).subscribe((res) => {
        this.actorList = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }

  getPeoplePage(page: number) {
    this.actorservice.getPeople(page).subscribe((resp) => {
      this.actorList = resp.results;
      this.numPagesTotal = Math.ceil(resp.total_pages / 10);
    });
  }

  showImg(actor :Actor){
    let id = actor.profile_path;
    return `https://image.tmdb.org/t/p/w500/${id}`;
  }

  showImgMovie(knownFor :KnownFor){
    let id = knownFor.poster_path;
    return `https://image.tmdb.org/t/p/w500/${id}`;
  }

  openDialog() {
    this.dialog.open(ActorInfoComponent);
  }

  getInfo(actor: Actor) {
    this.actorservice.getActorId(actor).subscribe((res) => {
      this.select = res;
      this.dialog.open(ActorInfoComponent, {
        data: {
          actorinfo: this.select,
          film : actor.known_for
        },
      });
    });
  }

}
