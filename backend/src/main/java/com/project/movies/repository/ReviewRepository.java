package com.project.movies.repository;

import com.project.movies.entity.ReviewEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReviewRepository extends MongoRepository<ReviewEntity, ObjectId> {

}
