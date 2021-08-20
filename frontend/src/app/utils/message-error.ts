

export class MessageError {

    static INGREDIENT_USED = (name: string ):string => {
        return "L’ingrédient " + name + " ne peut pas être supprimé car il est utilisé dans une recette."
    }

    static INGREDIENT_ALREADY_EXISTS = (name: string ):string => {
            return "L’ingrédient "+ name +" existe déjà."
    }
}