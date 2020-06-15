package com.rml.library.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.rml.library.models.Isbn;
import com.rml.library.repositories.IsbnRepository;

@RestController
@RequestMapping("/api/v1/isbn")
public class IsbnController {
	
	@Autowired
	private IsbnRepository isbnRepository;
	
	@GetMapping
	public List<Isbn> list(){
		return isbnRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Isbn isbn) {
		isbnRepository.save(isbn);
	}
	
	@GetMapping("/{id}")
	public Isbn get(@PathVariable long id) {
		return isbnRepository.getOne(id);
	}
}
