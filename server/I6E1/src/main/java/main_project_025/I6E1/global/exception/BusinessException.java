package main_project_025.I6E1.global.exception;

import lombok.Getter;

public class BusinessException extends RuntimeException{
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
