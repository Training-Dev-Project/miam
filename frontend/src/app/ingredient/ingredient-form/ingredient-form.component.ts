import {Component} from '@angular/core';
import {Ingredient} from 'src/app/models/ingredient';
import {IngredientServiceService} from '../ingredient-service.service';
import {AppContextService} from 'src/app/app.service';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons';
import {NgForm} from '@angular/forms';
import {ErrorInputComponent} from 'src/app/global/error-input/error-input.component';
import {MessageError} from 'src/app/utils/message-error';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-ingredient-form',
    templateUrl: './ingredient-form.component.html',
    styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent {
    faAddressCard = faFolderOpen;
    ingredients: Array<Ingredient> = [];
    ingredient!: Ingredient;
    error: string = ""
    hasErrors = false

    /**
     *
     * @param ingredientService
     * @param appCtx
     */
    constructor(
        private ingredientService: IngredientServiceService,
        private modalService: NgbModal,
        private appCtx: AppContextService
    ) {
        this.ingredient = {id: 0, image: "", name: ""}
    }

    onSubmit(formIngredient: NgForm) {
        if (formIngredient.valid && !this.hasErrors) {
            this.ingredientService.onSubmitIngredient(this.ingredient).subscribe(response => {
                this.ingredients = this.appCtx.getIngredientsObservable().getValue();
                this.ingredients.push(response);
                this.appCtx.setIngredientsObservable(this.ingredients);
                this.modalService.dismissAll();
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
        this.hasErrors = false
        const target = (<HTMLInputElement>event.target);
        if (target.files) {
            const file: File = target.files[0];
            const imageSize = Math.ceil(file.size/1024);
            if(imageSize > MessageError.MAXIMUM_IMAGE_SIZE){
                this.hasErrors = true;
                this.error = MessageError.IMAGE_SIZE_EXCEEDED(imageSize)
            }
            const result = await this.toBase64(file).catch(e => { throw Error(e) });
            this.ingredient.image = result as string;
        }
    }

    private toBase64(file: File) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    }
}
