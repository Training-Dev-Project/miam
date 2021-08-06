

export interface Recipe {
    id? : number;
    name: string;
    recipeIngredients: { [ingredientId: string] : number; }
    instructions? : string;
}

