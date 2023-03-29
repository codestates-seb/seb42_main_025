package main_project_025.I6E1.Member.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.repository.MemberRepository;
import main_project_025.I6E1.auth.enums.Roles;
import main_project_025.I6E1.auth.utils.CustomAuthorityUtils;
import main_project_025.I6E1.global.exception.BusinessException;
import main_project_025.I6E1.global.exception.ExceptionCode;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public Member create(Member member, Roles role){
        Boolean checkEmailResult = checkEmail(member.getEmail());
        Boolean checkNameResult = checkNickname(member.getNickname());

        if(!checkEmailResult){
            throw new BusinessException(ExceptionCode.EMAIL_EXISTS);
        }

        if(!checkNameResult){
            throw new BusinessException(ExceptionCode.USER_NAME_EXISTS);
        }

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<Roles> roles = new ArrayList<>();
        roles.add(role != null ? role : Roles.AUTHOR);
        member.setRoles(roles);

        return memberRepository.save(member);
    }




    public Member findById(Long memberId){
        return findVerifyMemberById(memberId);
    }

    public Member findByEmail(String email){
        return findVerifyMemberByEmail(email);
    }

    public Boolean checkEmail(String email){
        Optional<Member> optionalMembers = memberRepository.findByEmail(email);

        return optionalMembers.isEmpty();
    }

    public Boolean checkNickname(String nickname){
        Optional<Member> optionalMembers = memberRepository.findByNickname(nickname);

        return optionalMembers.isEmpty();
    }

    private Member findVerifyMemberById(Long memberId){
        Optional<Member> optionalMembers = memberRepository.findById(memberId);

        if(optionalMembers.isEmpty()){
            throw new BusinessException(ExceptionCode.USER_EXISTS);
        }

        return optionalMembers.get();
    }

    private Member findVerifyMemberByEmail(String email){
        Optional<Member> optionalMembers = memberRepository.findByEmail(email);

        if(optionalMembers.isEmpty()) {
            throw new BusinessException(ExceptionCode.USER_NOT_FOUND);
        }

        return optionalMembers.get();
    }

}
