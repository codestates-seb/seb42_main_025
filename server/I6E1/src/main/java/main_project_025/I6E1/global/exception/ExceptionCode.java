package main_project_025.I6E1.global.exception;


import lombok.Getter;
import lombok.NoArgsConstructor;

public enum ExceptionCode {

    COMMISSION_NOT_FOUND(404, "게시글을 찾지 못하였습니다."),
    NOT_AUTHORITY(403, "권한이 없습니다."),

    //멤버에서 사용할 부분들
    USER_NOT_FOUND(404, "User not found"),
    USER_EXISTS(409, "회원이 존재합니다."),
    USER_NAME_EXISTS(409, "해당 닉네임이 존재합니다."),
    EMAIL_EXISTS(409, "이메일이 존재합니다.");



    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
