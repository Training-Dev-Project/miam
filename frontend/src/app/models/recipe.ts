

export interface Recipe {
    id? : number;
    name: string;
    ingredients: { [ingredientId: number] : number };
    instructions? : string;
}

