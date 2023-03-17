package main_project_025.I6E1.Member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
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
        //프로필 사진
        //private String imgUrl;
        private String role;
    }

    //이메일 중복 확인
    @Getter
    @Setter
    public static class CheckEmail{
        private String email;
    }

    //회원가입 후 전달
    @Getter
    @Setter
    public static class Response{
        //error 출력 부분
        //따로 만들어야하는 걸까
        private Long memberId;
        private String email;
        private String password;
        private String nickname;
        private LocalDateTime createdAt;
    }

    //단일 회원 조회
    @Getter
    @Setter
    @AllArgsConstructor
    public static class MemberDetailResponse{
        private Long memberId;
        private String email;
        private String nickname;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        //private String imgUrl;
        private String role;

//        @Builder
//        public MemberDetailResponse(Long memberId, String email,
//                                    LocalDateTime createdAt, LocalDateTime modifiedAt, List<String> role){
//            this.memberId = memberId;
//            this.email = email;
//            this.createdAt = createdAt;
//            this.modifiedAt = modifiedAt;
//            this.role = role.get(0);
//        }
    }
}
