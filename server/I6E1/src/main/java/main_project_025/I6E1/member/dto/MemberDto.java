package main_project_025.I6E1.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;


@Getter
@Setter
public class MemberDto {
    
    //회원가입
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post{
        @NonNull
        @Pattern(regexp = "^[a-zA-Z0-9+.-]+@[a-zA-Z0-9.-]+$")
        private String email;
        @NonNull
        @Pattern(regexp = ".{8,}")
        private String password;
        @NonNull
        @Pattern(regexp = ".{2,}")
        private String nickname;
        private List<String> roles;
    }

    @Getter
    @Setter
    public static class CheckEmail{
        private String email;
    }

    @Getter
    @Setter
    public static class Response{
        private Long memberId;
        private String email;
        private String password;
        private String nickname;
        private LocalDateTime createdAt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class MemberDetailResponse{
        private Long memberId;
        private String email;
        private String nickname;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private List<String> roles;
    }
}
