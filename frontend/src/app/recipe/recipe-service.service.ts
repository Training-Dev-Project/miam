import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import {Recipe} from "../models/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  readonly apiPath:string = '/recipe';
  private defaultHeader: HttpHeaders= new HttpHeaders({'Content-type': 'application/json'});
  
  constructor(private client:HttpClient) {
  }

  saveRecipe(recipe: Recipe): Observable<any>{
    return this.client.post(environment.urlBackend + this.apiPath , recipe, {headers : this.defaultHeader} );
  }

  getAllRecipes(): Observable<any>{
    return this.client.get(environment.urlBackend + this.apiPath, {headers : this.defaultHeader});
  }

  deleteById(id : number) : Observable<any> {
    return this.client.delete(environment.urlBackend + this.apiPath +"/"+ id, {headers : this.defaultHeader} )
  }
}
