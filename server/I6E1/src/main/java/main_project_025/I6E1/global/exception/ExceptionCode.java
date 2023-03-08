package main_project_025.I6E1.global.exception;


import lombok.Getter;
import lombok.NoArgsConstructor;

public enum ExceptionCode {

    COMMISSION_NOT_FOUND(404, "게시글을 찾지 못하였습니다."),
    COMMISSION_EXIST(200,"댓글이 존재합니다"),
    NOT_AUTHORITY(403, "권한이 없습니다."),
    USER_NOT_FOUND(404, "User not found");


    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
