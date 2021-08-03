package com.cognizant.miam.mappers;

public abstract class FromDtoMapper<E, F> {
  public abstract E entityFromDTO(F dto);
  public abstract F dtoFromEntity(E entity);

}
