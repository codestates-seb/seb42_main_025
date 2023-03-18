package main_project_025.I6E1.auth.userdetails;

import main_project_025.I6E1.Member.entity.Member;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.stream.Collectors;

//authMember가 member 엔티티까지 영향 줄 수 있어서 extends 삭제하는게 좋음
public class AuthMember implements UserDetails {
    private Long memberId;
    private String email;
    //private String nickname; //임시로 nickname 받는 부분 생성
    private String password;
    private List<String> roles;

    private AuthMember(Member member) {
        this.memberId = member.getMemberId();
        this.email = member.getEmail();
        this.password = member.getPassword();
        this.roles = member.getRoles();
    }

    private AuthMember(Long id, String email, List<String> roles) {
        this.memberId = id;
        this.email = email;
        this.password = "";
        this.roles = roles;
    }

    //임시로 nickname 받는 부분 생성
//    private AuthMember(String nickname, List<String> roles) {
//        this.nickname = nickname;
//        this.roles = roles;
//    }

    public static AuthMember of(Member member) {
        return new AuthMember(member);
    }

    public static AuthMember of(Long id, String email, List<String> roles) {
        return new AuthMember(id, email, roles);
    }

//    //임시로 nickname 받는 부분 생성
//    public static AuthMember of(String nickname, List<String> roles){
//        return new AuthMember(nickname, roles);
//    }

    //테이블 설계가 memberId 기반이기 때문에 생성해줌
    public Long getMemberId() {
        return memberId;
    }

    @Override
    public List<GrantedAuthority> getAuthorities() {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
    }

    @Override //password 받아오지 못하는 오류로 인해 추가
    public String getPassword() {
        return password;
    }
    @Override
    public String getUsername(){
        return email; //member가 아닌 authMember 받아오려고 getEmail -> email 수정
    }

    @Override
    public boolean isAccountNonExpired(){
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
