package main_project_025.I6E1.auth.userdetails;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.repository.MemberRepository;
import main_project_025.I6E1.auth.utils.CustomAuthorityUtils;
import main_project_025.I6E1.global.exception.BusinessException;
import main_project_025.I6E1.global.exception.ExceptionCode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Slf4j
@Component
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils customAuthorityUtils;

    //사용자의 크리덴셜을 DB 에서 조회한 후 AuthenticationManager 에게 사용자의 UserDetails 를 전달
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        Member findMember = optionalMember.orElseThrow(
                () -> new BusinessException(ExceptionCode.USER_NOT_FOUND));

        return new MemberDetails(findMember);
    }

    //User 정보로 변환하는 과정과 User의 권한 정보를 생성하는 과정을 캡슐화
    private final class MemberDetails extends Member implements UserDetails{

        MemberDetails(Member member){
            setMemberId(member.getMemberId());
            setEmail(member.getEmail());
            setPassword(member.getPassword());
            setName(member.getName());
            setRoles(member.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities(){
            //User의 권한 정보를 생성
            return customAuthorityUtils.createAuthorities(getRoles());
        }

        @Override
        public String getUsername(){
            return getEmail();
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
}
