package com.cognizant.miam.repositories;

import com.cognizant.miam.dto.RecipeDTO;
import com.cognizant.miam.dto.UserDTO;
import com.cognizant.miam.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
