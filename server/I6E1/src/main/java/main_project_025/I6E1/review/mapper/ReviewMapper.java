package main_project_025.I6E1.review.mapper;

import main_project_025.I6E1.review.dto.ReviewDto;
import main_project_025.I6E1.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review reviewPostDtoToReview(ReviewDto.Post post);
    Review reviewPatchDtoToReview(ReviewDto.Patch patch);

    @Mapping(source = "member.nickname", target = "memberName")
    @Mapping(source = "member.email", target = "memberEmail")
    ReviewDto.Response reviewToResponse(Review review);
    List<ReviewDto.Response> reviewToResponses(List<Review> reviews);
}
