package main_project_025.I6E1.Member.dto;

import lombok.Getter;
import lombok.Setter;

public class MemberDto {
    
    //회원가입
    @Getter
    @Setter
    public static class Post{
        private String email;
        private String password;
        private String name;
        //프로필 사진
        private String imgUrl;
    }

    //이메일 중복 확인
    @Getter
    @Setter
    public static class CheckEmail{
        private String email;
    }

    //전달
    @Getter
    @Setter
    public static class Response{
        //error 출력 부분
        //따로 만들어야하는 걸까
        private Long memberId;
        private String email;
        private String password;
        private String name;
    }

    //단일 회원 조회
    @Getter
    @Setter
    public static class MemberDetailResponse{
        private Long memberId;
        private String email;
        private String name;
        private String imgUrl;
    }
}
