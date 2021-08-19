package com.cognizant.miam.services;

import com.cognizant.miam.commons.ErrorCode;
import com.cognizant.miam.exceptions.ingredients.IngredientException;
import com.cognizant.miam.models.Ingredient;
import com.cognizant.miam.repositories.IngredientRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImpl implements IngredientService {

    private final IngredientRepository ingredientRepository;

    public IngredientServiceImpl(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    @Override
    public Optional<Ingredient> findById(long id) {
        return ingredientRepository.findById(id);
    }

    @Override
    public Ingredient save(Ingredient ingredient) {
        if(this.ingredientRepository.findByName(ingredient.getName()) !=null){
            IngredientException ingredientException = new IngredientException("Constraint violation of name: "+ingredient.getName() +" must be unique");
            ingredientException.setErrorCode(ErrorCode.INGREDIENT_ALREADY_EXISTS);
            ingredientException.setStatus(HttpStatus.BAD_REQUEST);
            throw ingredientException;
        }

        if (!StringUtils.isEmpty(ingredient.getImage())) {
            var type = ingredient.getImage().split(";")[0];
            if(!"data:image/png".equals(type)) {
                IngredientException ingredientException = new IngredientException("The image must be a PNG");
                ingredientException.setErrorCode(ErrorCode.INGREDIENT_BAD_IMAGE_TYPE);
                ingredientException.setStatus(HttpStatus.BAD_REQUEST);
                throw ingredientException;
            }
        }

        return ingredientRepository.save(ingredient);
    }

    @Override
    public List<Ingredient> findAll() {
        return ingredientRepository.findAll();
    }

    @Override
    @Transactional
    public Long deleteByName(String name) {
        return ingredientRepository.deleteByName(name);
    }

    @Override
    @Transactional
    public void deleteById(long id) {
        ingredientRepository.deleteById(id);
    }

}
