package com.rml.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rml.library.models.Isbn;

public interface IsbnRepository extends JpaRepository<Isbn, Long> {

}
