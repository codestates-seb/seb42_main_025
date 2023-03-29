package main_project_025.I6E1.Member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import main_project_025.I6E1.auth.enums.Roles;

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
        private String email;
        private String password;
        private String nickname;
        private List<Roles> roles;
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
        private List<Roles> roles;
    }
}
