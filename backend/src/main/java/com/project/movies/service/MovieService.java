package com.project.movies.service;

import com.project.movies.entity.MovieEntity;
import com.project.movies.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {


    @Autowired
    private MovieRepository movieRepository;

    public List<MovieEntity> allMovies() {
        return movieRepository.findAll();
    }

    public List<MovieEntity> getMovieByImdbId(String imdbId) {
        return movieRepository.findMovieByImdbId(imdbId);
    }

    public List<MovieEntity> findMovieByGenres(String genre) {
        return movieRepository.findByGenresContaining(genre);
    }

}
