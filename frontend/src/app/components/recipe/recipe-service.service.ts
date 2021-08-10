import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from 'src/app/models/ingredient';
import { environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import {Recipe} from "../../models/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  readonly apiPath:string = '/recipe';
  private defaulHeader: HttpHeaders= new HttpHeaders({'Content-type': 'application/json'});
  
  constructor(private client:HttpClient) { 

  }

  saveRecipe(recipe: Recipe): Observable<any>{
    return this.client.post(environment.urlBackend + this.apiPath , recipe, {headers : this.defaulHeader} );
  }


}
