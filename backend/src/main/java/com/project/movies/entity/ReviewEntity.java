package com.project.movies.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewEntity {

    @Id
    private ObjectId id;
    private String body;
    public ReviewEntity(String body) {
        this.body = body;
    }
}

