package main_project_025.I6E1.auth.handler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//인증 성공 시 추가 처리를 할 수 있도록 하는 핸들러
@Slf4j
@RequiredArgsConstructor
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication)throws IOException {

        //인증 성공 후, 로그를 기록하거나 사용자 정보를 response로 전송하는 등의 추가 작업 가능
        log.info("# Authenticated successfully!");
    }
}
