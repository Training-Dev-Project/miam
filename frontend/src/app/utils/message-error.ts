

export class MessageError {

    static INGREDIENT_USED = (name: string ):string => {
        return "L’ingrédient " + name + " ne peut pas être supprimé car il est utilisé dans une recette."
    }

    static INGREDIENT_ALREADY_EXISTS = (name: string ):string => {
            return "L’ingrédient "+ name +" existe déjà."
    }

    static MAXIMUM_IMAGE_SIZE = 100;

    static IMAGE_SIZE_EXCEEDED = (max_size: number): string => {
        return "The image must not exceed the size : 100"
    }

    static EXISTING_ELEMENT_ON_CART = "Déja ajouter dans la liste de course"

    static CONFIRM_MESSAGE = "Souhitez-vous le supprimer dans la liste des courses?"
}