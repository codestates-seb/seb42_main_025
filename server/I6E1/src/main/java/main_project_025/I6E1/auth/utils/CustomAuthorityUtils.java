package main_project_025.I6E1.auth.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {

    // application.yml 에 추가한 프로퍼티를 가져옴 : 관리자용 이메일 주소
    @Value("${mail.address.admin}")
    public String adminMailAddress;

    private final List<GrantedAuthority> ADMIN_ROLES
            = AuthorityUtils.createAuthorityList("ROLE_ADMIN");
    private final List<GrantedAuthority> USER_ROLES
            = AuthorityUtils.createAuthorityList("ROLE_USER");
    private final List<GrantedAuthority> AUTHOR_ROLES
            = AuthorityUtils.createAuthorityList("ROLE_AUTHOR");



    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN");
    private final List<String> USER_ROLES_STRING = List.of("USER");
    private final List<String> AUTHOR_ROLES_STRING = List.of("AUTHOR");


    //메모리 상의 Role을 기반으로 권한 정보 생성
    //roles 파라미터로 권한 정보를 받아 GrantedAuthority 리스트를 생성
    public List<GrantedAuthority> createAuthorityList(String email, Boolean status) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES;
        }
        //계정 활성화 상태 : true
        else if (status) {
            return AUTHOR_ROLES;
        }
        return USER_ROLES;
    }

    // DB에 저장된 Role을 기반으로 권한 정보 생성
    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
        return authorities;
    }

    //DB 저장용
    public List<String> createRoles (String email,Boolean status) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES_STRING;
        } else if (status) {
            return USER_ROLES_STRING;
        }
        return AUTHOR_ROLES_STRING;
    }
}


