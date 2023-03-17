package main_project_025.I6E1.Member.service;

import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.repository.MemberRepository;
import main_project_025.I6E1.auth.utils.CustomAuthorityUtils;
import main_project_025.I6E1.global.exception.BusinessException;
import main_project_025.I6E1.global.exception.ExceptionCode;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    //1. 회원가입, Create
    public Member create(Member member){
        //이미 해당 이메일을 사용하고 있는 회원이 있는지 확인
        Boolean checkEmailResult = checkEmail(member.getEmail());
        //이미 해당 닉네임을 사용하고 있는 회원이 있는지 확인
        Boolean checkNameResult = checkNickname(member.getNickname());

        //checkEmailResult가 false인 경우
        if(!checkEmailResult){
            throw new BusinessException(ExceptionCode.EMAIL_EXISTS);
        }
        //checkNameResult가 false인 경우
        if(!checkNameResult){
            throw new BusinessException(ExceptionCode.USER_NAME_EXISTS);
        }

        //비밀번호 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        //암호화된 password를 다시 할당
        member.setPassword(encryptedPassword);

        //회원 프로필 이미지
        //이미지 부분 구현되면 추가로 가져올 예정
//        Image image = new Image();
//        image.setUrl();
//        member.setImage(image);

        //선택한 권한(사용자/작가) 저장
//        List<String> roles = authorityUtils.createRoles(member.getEmail());
//        member.setRoles(roles);

        return memberRepository.save(member);
    }

    //2. 회원 정보 조회(외부에서 사용 시)
    public Member findById(Long memberId){
        return findVerifyMemberById(memberId);
    }

    public Member findByEmail(String email){
        return findVerifyMemberByEmail(email);
    }


    //이메일 중복 확인
    public Boolean checkEmail(String email){
        Optional<Member> optionalMembers = memberRepository.findByEmail(email);

        //중복값이 있는지 확인 : 없으면 true, 있으면 false
        return optionalMembers.isEmpty();
    }

    //닉네임 중복 확인
    public Boolean checkNickname(String nickname){
        Optional<Member> optionalMembers = memberRepository.findByNickname(nickname);

        return optionalMembers.isEmpty();
    }

    //3. 회원이 있는지 확인
    //memberId로 회원 확인 시
    private Member findVerifyMemberById(Long memberId){
        Optional<Member> optionalMembers = memberRepository.findById(memberId);

        if(optionalMembers.isEmpty()){
            throw new BusinessException(ExceptionCode.USER_EXISTS);
        }

        return optionalMembers.get();
    }
    
    //메일로 회원 확인(필요하면 public 접근 만듬)
    //안쓸경우 코드 전체정리 시, 정리
    private Member findVerifyMemberByEmail(String email){
        Optional<Member> optionalMembers = memberRepository.findByEmail(email);

        //null일 경우에는 회원을 찾을 수 없음
        if(optionalMembers.isEmpty()) {
            throw new BusinessException(ExceptionCode.USER_NOT_FOUND);
        }

        //찾는 값이 있을 경우 가져옴
        return optionalMembers.get();
    }
}
