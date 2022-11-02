import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actor, ActorResponse } from '../models/interfaces/actor.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }


  public getPeople(page : number): Observable<ActorResponse> {
    return this.http.get<ActorResponse>(`${environment.apiBaseUrl}person/popular?api_key=${environment.apiKey}&language=es-ES&page=${page}`);
  }

  getActorId(actor: Actor): Observable<Actor> {
    return this.http.get<Actor>(`${environment.apiBaseUrl}person/${actor.id}?api_key=${environment.apiKey}&language=es`);
  }
}
