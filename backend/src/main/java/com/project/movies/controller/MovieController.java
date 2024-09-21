package com.project.movies.controller;

import com.project.movies.dto.MovieDTO;
import com.project.movies.entity.MovieEntity;
import com.project.movies.payload.response.BaseResponse;
import com.project.movies.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.Data;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<?> getAllMovie() {

        List<MovieEntity> list = movieService.allMovies();
        BaseResponse baseResponse = new BaseResponse();
        baseResponse.setData(list);
        return new ResponseEntity<>(baseResponse, HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<?> getMovieByImdbId(@PathVariable String imdbId) {
        List<MovieEntity>  list = movieService.getMovieByImdbId(imdbId);
        BaseResponse baseResponse = new BaseResponse();
        baseResponse.setData(list);
        return new ResponseEntity<>(baseResponse, HttpStatus.OK);
    }

    @GetMapping("/genre/{genre}")
    public ResponseEntity<?> getMovieByGenres(@PathVariable String genre) {
        List<MovieEntity>  list = movieService.findMovieByGenres(genre);
        BaseResponse baseResponse = new BaseResponse();
        baseResponse.setData(list);
        return new ResponseEntity<>(baseResponse, HttpStatus.OK);
    }
}
