package main_project_025.I6E1.auth.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

// 사용자 권한을 생성해주는 역할
@Component
public class CustomAuthorityUtils {

    // application.yml 에 추가한 프로퍼티를 가져온다. : 관리자용 이메일 주소
    @Value("${mail.address.admin}")
    private String adminMailAddress;

    // 스프링 시큐리티에서 지원하는 AuthorityUtils 클래스를 이용해서 관리자용 권한 목록을 List<GrantedAuthority> 형태로 미리 생성
    private final List<GrantedAuthority> ADMIN_ROLES = AuthorityUtils.createAuthorityList("ROLE_ADMIN");
    private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("USER_ROLES");

    // DB 저장용 Role String
    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN", "USER");
    private final List<String> USER_ROLES_STRING = List.of("USER");

    // 파라미터로 전달받은 이메일이 관리자용 이메일이라면 관리자 권한 List<GrantedAuthority> ADMIN_ROLES return
    public List<GrantedAuthority> createAuthorities(String email) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES;
        }
        return USER_ROLES;
    }

    // DB 에 저장된 Role 을 기반으로 권한 정보 생성
    // 관리자용 주소를 기준으로 관리자 Role 추가할 필요 없이
    // 데이터베이스에서 가져온 Role 목록을 그대로 이용해서 권한 목록을 생성
    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
        return authorities;
    }

    // DB 저장용
    public List<String> createRoles (String email) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES_STRING;
        }
        return USER_ROLES_STRING;
    }
}