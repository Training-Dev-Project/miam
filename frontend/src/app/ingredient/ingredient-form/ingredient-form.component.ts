import {Component} from '@angular/core';
import {Ingredient} from 'src/app/models/ingredient';
import {IngredientServiceService} from '../ingredient-service.service';
import {AppContextService} from 'src/app/app.service';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons';
import {NgForm} from '@angular/forms';
import {ErrorInputComponent} from 'src/app/global/error-input/error-input.component';
import {MessageError} from 'src/app/utils/message-error';

@Component({
    selector: 'app-ingredient-form',
    templateUrl: './ingredient-form.component.html',
    styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent {
    faAddressCard = faFolderOpen;
    ingredients: Array<Ingredient> = [];
    ingredient!: Ingredient;
    image!: File

    /**
     *
     * @param ingredientService
     * @param appCtx
     */
    constructor(
        private ingredientService: IngredientServiceService,
        private appCtx: AppContextService
    ) {

        this.ingredient = {id: 0, image: "", name: ""}

    }

    onSubmit(formIngredient: NgForm) {
        if (formIngredient.valid) {
            this.ingredientService.onSubmitIngredient(this.ingredient).subscribe(response => {
                this.ingredients = this.appCtx.getIngredientsObservable().getValue();
                this.ingredients.push(response);
                this.appCtx.setIngredientsObservable(this.ingredients);
            }, response => {
                if (response.error.code === 'INGREDIENT_ALREADY_EXISTS') {
                    formIngredient.controls['name'].setErrors({
                        uniqueNameIngredient: {
                            message: MessageError.INGREDIENT_ALREADY_EXISTS(this.ingredient.name)
                        }
                    });
                }
            });
        } else if (formIngredient.invalid) {
            let errorMessge = ErrorInputComponent.inValid(formIngredient);
            errorMessge: () => null;
        }
    }


    async onFileUpload(event: Event) {
        const target = (<HTMLInputElement>event.target);
        if (target.files) {
            const file: File = target.files[0];
            console.log("The size is" + file.size);
            const result = await this.toBase64(file).catch(e => { throw Error(e) });
            this.ingredient.image = result as string;
            console.log("here is the base ==> " + this.ingredient.image);
        }
    }

    private toBase64(file: File) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            console.log(reader.result)
        })
    }
}
