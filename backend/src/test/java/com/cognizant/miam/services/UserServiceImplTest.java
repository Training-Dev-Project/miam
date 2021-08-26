package com.cognizant.miam.services;

import com.cognizant.miam.dto.UserDTO;
import com.cognizant.miam.models.User;
import com.cognizant.miam.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;


@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private final UserService userService = new UserServiceImpl(userRepository);

    @Captor
    private ArgumentCaptor<User> postArgumentCaptor;

    @Mock
    private UserDTO userDTO;
    @Mock
    User user1;

    @BeforeEach
    public void setUp() {
        UserDTO userDTO = UserDTO.Builder.newInstance()
                .setName("user1")
                .setEmail("user1@miam.com")
                .setPassword("user1Test").build();

    }

    @Test
    void shouldRegisterUserInRepository() {
        user1 = User.Builder.newInstance()
                .setName("user1")
                .setEmail("user1@miam.com")
                .setPassword("user1Test").build();
        Mockito.when(userRepository.save(user1)).thenReturn(user1);

        UserDTO actualUser = userService.register(userDTO);
        Mockito.verify(userRepository, Mockito.times(1)).save(ArgumentMatchers.any(User.class));

        /*Mockito.verify(userRepository, Mockito.times(1)).save(postArgumentCaptor.capture());

        //Assertions.assertThat(postArgumentCaptor.getValue().getId()).isEqualTo(101L);
        Assertions.assertThat(postArgumentCaptor.getValue().getName()).isEqualTo("User1");
        Assertions.assertThat(postArgumentCaptor.getValue().getEmail()).isEqualTo("user1@miam.com");*/
    }

    /*@Test
    public void shouldFindUserInRepository(UserDTO userDTO) {
        User user1 = new User(101L, "user1", "user1@miam.com", "user1Test");
        Mockito.when(userRepository.findByEmail("user1@miam.com")).thenReturn(user1);

        UserDTO actualUser = userService.findByEmail("user1@miam.com");

        Assertions.assertThat(actualUser.getId()).isEqualTo(user1.getId());
        Assertions.assertThat(actualUser.getName()).isEqualTo(user1.getName());

    }*/
}

