import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/interfaces/actor-info.interface';
import { KnownFor } from 'src/app/models/interfaces/actor.interface';

@Component({
  selector: 'app-actor-info',
  templateUrl: './actor-info.component.html',
  styleUrls: ['./actor-info.component.css']
})
export class ActorInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  showImgMovie(knownFor :KnownFor){
    let id = knownFor.poster_path;
    return `https://image.tmdb.org/t/p/w500/${id}`;
  }

}
