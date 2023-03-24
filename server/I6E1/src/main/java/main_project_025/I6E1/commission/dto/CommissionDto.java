package main_project_025.I6E1.commission.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;
import java.util.List;

public class CommissionDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post{
        @NotBlank(message = "제목을 입력해주세요.")
        private String title;

        @NotBlank(message = "내용을 입력해주세요.")
        private String content;

        @NotBlank(message = "내용을 입력해주세요.")
        private String subContent;

        @NotEmpty(message = "태그를 입력해주세요.")
        private List<String> tags;//tag test
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        @NotBlank(message = "제목을 입력해주세요.")
        private String title;

        @NotBlank(message = "내용을 입력해주세요.")
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response{
        private long commissionId;
        private String title;
        private String content;
        private String subContent;
        private int viewCount;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String memberName;
        private String memberEmail;
        private List<String> tags;
        //private List<ReviewResponseDto> reviews;
    }
}
