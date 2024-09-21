package com.project.movies.payload.response;

import com.project.movies.entity.MovieEntity;
import lombok.Data;

import java.util.List;

@Data
public class BaseResponse {
    private int statusCode = 200;
    private String message = "";
    private Object data;

}
