package com.project.movies.dto;

import lombok.Data;
import org.bson.types.ObjectId;

import java.io.Serializable;
import java.util.List;

@Data
public class MovieDTO implements Serializable {
    private ObjectId id;

    private String imdbId;

    private String title;

    private String releaseDate;

    private String trailerLink;

    private String poster;

    private List<String> genres;

    private List<String> backdrops;

    private String description;

    private String imdbPoint;
}
