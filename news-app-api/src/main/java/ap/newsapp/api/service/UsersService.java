package ap.newsapp.api.service;

import java.util.List;
import java.util.logging.Logger;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ap.newsapp.api.model.Users;
import ap.newsapp.api.repository.UsersRepository;

@Service
public class UsersService {
	
	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	Logger logger = Logger.getLogger(UsersService.class.getName()); 

	
	public List<Users> getUsers() {
		logger.info("Executing getUsers() method");
		return usersRepository.findAll();
	}
	
	public String saveUser(Users user) {
		logger.info("Executing saveUser(user) method");

		//generate sequence
		user.setId(sequenceGeneratorService.getSequenceNumber(Users.SEQUENCE_NAME));
		try {
			usersRepository.save(user);
		} catch(Exception e) {
			System.out.println("Error saving User!!!" +e);
		}
		JSONObject obj = new JSONObject();
		obj.put("Response", "User(Id: " +user.getId() + " is added.");
		return obj.toString();
	}
	
	public String checkUser(Users user) {
		logger.info("Executing checkUser(user) method");

		Users fetchedUser = usersRepository.findByEmail(user.getEmail());	
		JSONObject obj = new JSONObject();
		obj.put("name", fetchedUser.getName());
		obj.put("email", fetchedUser.getEmail());
		obj.put("userType", fetchedUser.getUserType());
		return obj.toString();
	}
	
	public String updateUser(Users updatedUser) {
		logger.info("Executing updateUser(updatedUser) method");

		Users user = usersRepository.findById(updatedUser.getId()).get();
		user.setName(updatedUser.getName());
		user.setEmail(updatedUser.getEmail());
		user.setUserType(updatedUser.getUserType());
		try {
			usersRepository.save(user);
		} catch(Exception e) {
			System.out.println("Error updating User!!!" +e);
		}
		JSONObject obj = new JSONObject();
		obj.put("Response", "User(Id: " +user.getId() + " is updated.");
		return obj.toString();
	}

}
