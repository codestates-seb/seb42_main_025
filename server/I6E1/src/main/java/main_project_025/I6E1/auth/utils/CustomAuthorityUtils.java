package main_project_025.I6E1.auth.utils;

import main_project_025.I6E1.auth.enums.Roles;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {

    @Value("${mail.address.admin}")
    private String adminMailAddress;

    private final List<String> USER_ROLE_STRING = List.of("USER");
    private final List<String> AUTHOR_ROLE_STRING = List.of("AUTHOR", "USER");
    private final List<String> ADMIN_ROLE_STRING = List.of("ADMIN", "USER");

    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" +  role))
                .collect(Collectors.toList());
    }

    public List<String> createRoles(String role) {
        if(role.equals(Roles.ADMIN.toString())) {
            return ADMIN_ROLE_STRING;
        } else if(role.equals(Roles.AUTHOR.toString())){
            return AUTHOR_ROLE_STRING;
        } else if(role.equals(Roles.USER.toString())){
            return USER_ROLE_STRING;
        }
        return null;
    }

}