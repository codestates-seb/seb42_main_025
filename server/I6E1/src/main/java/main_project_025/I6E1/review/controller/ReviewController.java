package main_project_025.I6E1.review.controller;

import lombok.AllArgsConstructor;
import main_project_025.I6E1.global.Page.PageDto;
import main_project_025.I6E1.global.exception.BusinessException;
import main_project_025.I6E1.review.dto.ReviewDto;
import main_project_025.I6E1.review.entity.Review;
import main_project_025.I6E1.review.mapper.ReviewMapper;
import main_project_025.I6E1.review.service.ReviewService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/v1/review")
@Validated
@AllArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
    private final ReviewMapper mapper;

    // CREATE
    @PostMapping
    public ResponseEntity postReview(@Valid @RequestBody ReviewDto.Post post) {
        Review review = reviewService.createReview(mapper.reviewPostDtoToReview(post));

        ReviewDto.Response response = mapper.reviewToResponse(review);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // READ
    @GetMapping("/{review-id}")
    public ResponseEntity getReview(@PathVariable("review-id") long reviewId) throws BusinessException {
        try {
            Review review = reviewService.readReview(reviewId);
            ReviewDto.Response response = mapper.reviewToResponse(review);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (BusinessException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // READ ALL
    // 페이지네이션
    @GetMapping
    public ResponseEntity getReviews(Pageable pageable) {
        try {
            Page<Review> reviewPage = reviewService.readReviews(pageable);
            List<Review> reviewList = reviewPage.getContent();

            PageDto pageDto = new PageDto<>(mapper.reviewToResponses(reviewList), reviewPage);
            return new ResponseEntity<>(pageDto, HttpStatus.OK);
        } catch (BusinessException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    //UPDATE
    @PatchMapping("/{review-id}")
    public ResponseEntity patchReview(@PathVariable("review-id") long reviewId,
                                      @Valid @RequestBody ReviewDto.Patch patch) throws BusinessException {
        try {
            Review review = reviewService.updateReview(reviewId, mapper.reviewPatchDtoToReview(patch));

            ReviewDto.Response response = mapper.reviewToResponse(review);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (BusinessException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("review-id") long reviewId) throws BusinessException {
        try {
            reviewService.deleteReview(reviewId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (BusinessException e){
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}