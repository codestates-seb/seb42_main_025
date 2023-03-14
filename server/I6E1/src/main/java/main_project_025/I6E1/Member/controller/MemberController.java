package main_project_025.I6E1.Member.controller;

import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.Member.dto.MemberDto;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.mapper.MemberMapper;
import main_project_025.I6E1.Member.response.SingleResponseDto;
import main_project_025.I6E1.Member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RequestMapping("/members")
@RestController
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;
    
    //1. 회원가입
    @PostMapping("/sign-up")
    public ResponseEntity<Map<String, Long>> postMember(@RequestBody MemberDto.Post memberPostDto){
        Member member =  memberMapper.memberPostToMember(memberPostDto);
        //Member 객체를 저장
        Member savedMember = memberService.create(member);

        //memberId를 저장
        Map<String, Long> response = new HashMap<>();
        response.put("memberId", savedMember.getMemberId());

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    //2. 회원 상세 정보 조회
    @GetMapping("/{member-id}")
    public ResponseEntity findMember(@PathVariable("member-id") Long memberId){
        Member findMember = memberService.findById(memberId);
        MemberDto.MemberDetailResponse response = memberMapper.memberToMemberDetailResponse(findMember);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    //3. 이메일 중복 확인
    //안쓸경우 코드 전체정리 시, 정리
    @PostMapping("/email")
    public ResponseEntity checkEmail(@RequestBody MemberDto.CheckEmail email){
        //이메일 사용 여부 확인
        boolean check = memberService.checkEmail(email.getEmail());
        Map<String,Boolean> response = new HashMap<>();

        //이메일 사용 가능 여부를 나타내는 boolean 값을 추가
        response.put("can-use",check);

        return ResponseEntity.ok(response);
    }


}
