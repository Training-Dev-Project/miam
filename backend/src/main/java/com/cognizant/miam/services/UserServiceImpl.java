package com.cognizant.miam.services;

import com.cognizant.miam.dto.UserDTO;
import com.cognizant.miam.jwt.MyUserDetails;
import com.cognizant.miam.models.User;
import com.cognizant.miam.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final BCryptPasswordEncoder passwordEncoder;

	public UserServiceImpl(UserRepository userRepository) {
		this.passwordEncoder = new BCryptPasswordEncoder();
		this.userRepository = userRepository;
	}

	@Override
	public UserDTO register(UserDTO userDTO) {

		// ENCODE
		String password = "{bcrypt}" + passwordEncoder.encode(userDTO.getPassword());

		//Save
		final User user = userRepository.save(
				User.Builder.newInstance()
						.setName(userDTO.getName())
						.setEmail(userDTO.getEmail())
						.setPassword(password).build()
		);

		userDTO.setId(user.getId());
		return userDTO;
	}

	@Override
	public UserDTO findByEmail(String email) {
		User user = userRepository.findByEmail(email);

		return UserDTO.Builder.newInstance()
				.setName(user.getName())
				.setEmail(user.getEmail())
				.setPassword(user.getPassword())
				.setId(user.getId()).build();
	}


	@Override
	public List<UserDTO> findAll() {
		List<UserDTO> userDTOS;
		List<User> users = userRepository.findAll();

		userDTOS = users.stream().map(user ->
				UserDTO.Builder.newInstance()
						.setName(user.getName())
						.setEmail(user.getEmail())
						.setPassword(user.getPassword())
						.setId(user.getId())
						.build()
		).collect(Collectors.toList());

		return userDTOS;
	}

	@Override
	public void deleteUsers() {
		userRepository.deleteAll();
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		return new MyUserDetails(findByEmail(email));
	}
}
