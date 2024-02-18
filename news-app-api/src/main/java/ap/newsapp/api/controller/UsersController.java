package ap.newsapp.api.controller;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ap.newsapp.api.model.Users;
import ap.newsapp.api.service.UsersService;

@RestController
public class UsersController {

	@Autowired
	private UsersService usersService;
	
	Logger logger = Logger.getLogger(UsersController.class.getName()); 
	
	@GetMapping("/users")
	public List<Users> getUsers() {
		logger.info("GET Request at /users");
		return usersService.getUsers();
	}
	
	@PostMapping("/users/register")
	public ResponseEntity<String> saveUser(@RequestBody Users user) {
		logger.info("POST Request at /users/register");
		return new ResponseEntity<String>(usersService.saveUser(user), HttpStatus.OK);
	}
	
	@PostMapping("/users/login")
	public ResponseEntity<String> checkUser(@RequestBody Users user) {
		logger.info("POST Request at /users/login");
		return new ResponseEntity<String>(usersService.checkUser(user), HttpStatus.OK);
	}
	
	@PutMapping("/users")
	public ResponseEntity<String> updateUser(@RequestBody Users updatedUser) {
		logger.info("PUT Request at /users");
		return new ResponseEntity<String>(usersService.updateUser(updatedUser), HttpStatus.OK);
	}
	
}
