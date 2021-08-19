package com.cognizant.miam.services;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.util.Base64;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import com.cognizant.miam.commons.ErrorCode;
import com.cognizant.miam.exceptions.ingredients.IngredientException;
import com.cognizant.miam.models.Ingredient;
import com.cognizant.miam.repositories.IngredientRepository;

import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;
import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class IngredientServiceImpl implements IngredientService {

    private IngredientRepository ingredientRepository;

    public IngredientServiceImpl(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    @Override
    public Optional<Ingredient> findById(long id) {
        return ingredientRepository.findById(id);
    }

    @Override
    public Ingredient save(Ingredient ingredient) {
        // 3) visu front
        // 4) encode sans verif
        // 5) verif finales

        String bananaencoded = "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";

        // ENCODING
        // byte[] encodedBytes = Base64.getEncoder().encode("Test".getBytes());
        // System.out.println("encodedBytes " + new String(encodedBytes));

        checkImage(createImageFromBytes(Base64.getDecoder().decode(bananaencoded)));

        ingredient.setImage(bananaencoded);
        return ingredientRepository.save(ingredient);
    }
  /**
   *
   * @param ingredient
   * @return
   */
  @Override
  public Ingredient save(Ingredient ingredient){
    if(this.ingredientRepository.findByName(ingredient.getName()) !=null){
      IngredientException ingredientException = new IngredientException("Constraint violation of name: "+ingredient.getName() +" must be unique");
      ingredientException.setErrorCode(ErrorCode.INGREDIENT_ALREADY_EXISTS);
      ingredientException.setStatus(HttpStatus.BAD_REQUEST);
      throw ingredientException;
    }
    return this.ingredientRepository.save(ingredient);
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
    public void deleteById(long id) throws Exception {
        ingredientRepository.deleteById(id);
    }

    private BufferedImage createImageFromBytes(byte[] imageData) {
        ByteArrayInputStream inputArray = new ByteArrayInputStream(imageData);
        try {
            return ImageIO.read(inputArray);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private void checkImage(BufferedImage image) {
        System.out.println("Image height is : " + image.getHeight());
        System.out.println("Image width is : " + image.getWidth());
        //System.out.println("Image type is : "+image.getType());

        // in progress ...
        /*File outputfile = new File("image.png");
        try {
            ImageIO.write(image, "png", outputfile);
        } catch (IOException e) {
            e.printStackTrace();
        }

        //ImageInputStream iis = ImageIO.createImageInputStream(newImage);

        ImageInputStream iis = null;
        try {
            iis = ImageIO.createImageInputStream(outputfile);
        } catch (IOException e) {
            e.printStackTrace();
        }
        ImageReader reader = ImageIO.getImageReader(iis);

        Iterator<ImageReader> imageReaders = ImageIO.getImageReaders(iis);

        while (imageReaders.hasNext()) {
            ImageReader reader = (ImageReader) imageReaders.next();
            try {
                System.out.printf("formatName: %s%n", reader.getFormatName());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }*/
    }
}
