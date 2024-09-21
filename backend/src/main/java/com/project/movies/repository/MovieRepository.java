package com.project.movies.repository;

import com.project.movies.entity.MovieEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface MovieRepository extends MongoRepository<MovieEntity, ObjectId> {

    List<MovieEntity> findMovieByImdbId(String imdbId);

    List<MovieEntity> findByGenresContaining(String genre);
}
