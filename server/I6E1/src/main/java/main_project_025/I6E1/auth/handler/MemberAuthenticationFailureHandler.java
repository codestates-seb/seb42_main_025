package main_project_025.I6E1.auth.handler;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.response.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//로그인 인증 실패 시, 추가 작업
@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException{
        //인증 실패시 에러 로그를 기록, 전송 가능
        log.error("# Authentication failed: {}", exception.getMessage());

        // 응답 객체에 Error 정보를 담음
        sendErrorResponse(response);
    }

    // 응답 객체에 Error 정보를 담음
    private void sendErrorResponse(HttpServletResponse response)throws IOException{
        //error정보가 담긴 객체를 JSON 문자열로 변환에 사용하는 GSON에 인스턴스 생성
        Gson gson = new Gson();
        //상태코드 전달
        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED);
        // MediaType 지정
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        // 응답할 상태코드 지정
        response.setStatus(HttpStatus.UNAUTHORIZED.value());

        // Gson을 이용해 ErrorResponse 객체를 JSON 포맷 문자열로 변환 후, 출력 스트림을 생성
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
    }
}
