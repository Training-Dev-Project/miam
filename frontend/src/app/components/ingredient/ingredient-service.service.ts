import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from 'src/app/models/ingredient';
import { environment} from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientServiceService {
  readonly apiPath:string = '/ingredient';
  private defaulHeader: HttpHeaders= new HttpHeaders({'Content-type': 'application/json'});
  
  constructor(private client:HttpClient) { 

  }

  onSubmitIngredient(ingredient: Ingredient): Observable<any>{
    // console.log(environment.urlBackend + this.apiPath)
      return this.client.post(environment.urlBackend + this.apiPath , ingredient, {headers : this.defaulHeader} );
      
              // .map( (response:Ingredient)  => response ); 

  }


}
