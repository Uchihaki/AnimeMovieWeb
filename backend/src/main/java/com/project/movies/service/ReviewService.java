package com.project.movies.service;

import com.project.movies.entity.MovieEntity;
import com.project.movies.entity.ReviewEntity;
import com.project.movies.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public ReviewEntity createReview(String reviewBody, String imdbId) {
        ReviewEntity review = reviewRepository.insert(new ReviewEntity(reviewBody));
        mongoTemplate.update(MovieEntity.class).matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review)).first();
        return review;
    }



}
