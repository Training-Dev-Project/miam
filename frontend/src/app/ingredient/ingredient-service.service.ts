import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from 'src/app/models/ingredient';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientServiceService {
  readonly apiPath:string = '/ingredient';
  private defaultHeader: HttpHeaders= new HttpHeaders({'Content-type': 'application/json'});
  
  constructor(private client:HttpClient) { 

  }

  onSubmitIngredient(ingredient: Ingredient): Observable<any>{
      return this.client.post(environment.urlBackend + this.apiPath , ingredient, {headers : this.defaultHeader} );
  }

   onGetAllIngredients(): Observable<any>{
        return this.client.get(environment.urlBackend + this.apiPath, {headers : this.defaultHeader});
   }
   onGetIngredientById(id :string): Observable<any>{
        return this.client.get(environment.urlBackend + this.apiPath+"/id/"+id, {headers : this.defaultHeader});
        //console.log(ingredients);
   } 
   onGetIngredientsByIds(ids : Array<number>) : Observable<any> {
     return this.client.get(environment.urlBackend + this.apiPath + "/" + ids.join(','), {headers : this.defaultHeader} );
     }

   onDeleteIngredient(name : string) : Observable<any> {
        return this.client.delete(environment.urlBackend + this.apiPath + "/" + name, {headers : this.defaultHeader})
   }

   onDeleteById(id : number) : Observable<any> {
        console.log(environment.urlBackend);
        return this.client.delete(environment.urlBackend + this.apiPath + "/delete/" + id, {headers : this.defaultHeader} )
   }

   onGetSearchedIngredients(name: String): Observable<any>{
    return this.client.get(environment.urlBackend + this.apiPath + "/find?keyword=" + name, {headers : this.defaultHeader})
}

}
