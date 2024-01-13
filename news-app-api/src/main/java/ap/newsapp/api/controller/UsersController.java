package ap.newsapp.api.controller;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ap.newsapp.api.model.Users;
import ap.newsapp.api.repository.UsersRepository;
import ap.newsapp.api.service.SequenceGeneratorService;

@RestController
public class UsersController {

	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	
	@GetMapping("/users")
	public List<Users> getUsers() {
		return usersRepository.findAll();
	}
	
	@PostMapping("/users/register")
	public ResponseEntity<String> saveUser(@RequestBody Users user) {
		//generate sequence
		user.setId(sequenceGeneratorService.getSequenceNumber(Users.SEQUENCE_NAME));
		usersRepository.save(user);
		
		JSONObject obj = new JSONObject();
		obj.put("Response", "User(Id: " +user.getId() + " is added.");
		return new ResponseEntity<String>(obj.toString(), HttpStatus.OK);
	}
	
	@PostMapping("/users/login")
	public ResponseEntity<String> checkUser(@RequestBody Users user) {
		Users fetchedUser = usersRepository.findByEmail(user.getEmail());	
		JSONObject obj = new JSONObject();
		obj.put("name", fetchedUser.getName());
		obj.put("email", fetchedUser.getEmail());
		obj.put("userType", fetchedUser.getUserType());
		return new ResponseEntity<String>(obj.toString(), HttpStatus.OK);
	}
	
	@PutMapping("/users")
	public ResponseEntity<String> updateUser(@RequestBody Users updatedUser) {
		Users user = usersRepository.findById(updatedUser.getId()).get();
		user.setName(updatedUser.getName());
		user.setEmail(updatedUser.getEmail());
		user.setUserType(updatedUser.getUserType());
		usersRepository.save(user);
		
		JSONObject obj = new JSONObject();
		obj.put("Response", "User(Id: " +user.getId() + " is updated.");
		return new ResponseEntity<String>(obj.toString(), HttpStatus.OK);
	}
	
}
