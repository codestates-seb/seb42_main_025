package main_project_025.I6E1.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class ReviewDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post{
        private long commissionId;
        @NotBlank(message = "내용을 입력해주세요.")
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        private long commissionId;
        @NotBlank(message = "내용을 입력해주세요.")
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response{
        private long reviewId;
        private long commissionId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String memberName;
        private String memberEmail;
    }
}
