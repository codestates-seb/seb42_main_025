package main_project_025.I6E1.auth.controller;

import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.auth.userdetails.AuthMember;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class TestController {
    @GetMapping("/test")
    @PreAuthorize("hasRole('ROLE_USER')") //user만 사용가능(권한 확인용)
    public String test(@AuthenticationPrincipal AuthMember authMember) {
        var authorities = authMember.getAuthorities();
        return "";
    }
}
