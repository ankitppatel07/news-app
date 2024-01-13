package ap.newsapp.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import ap.newsapp.api.repository.UsersRepository;
import ap.newsapp.api.service.SequenceGeneratorService;

@RestController
public class UsersController {

	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	
	
	
	
}
