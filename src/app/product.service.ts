import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import './album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  // Inject the HttpClient
  constructor(private _http: Http) { }

  getAlbum(id: number) : Observable<Album>{
    return this._http.get(this._albumUrl).map(response => response.json());
  }
}
