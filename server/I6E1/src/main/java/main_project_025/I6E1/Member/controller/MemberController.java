package main_project_025.I6E1.Member.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.Member.dto.MemberDto;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.mapper.MemberMapper;
import main_project_025.I6E1.global.response.SingleResponseDto;
import main_project_025.I6E1.Member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/members")
@RestController
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;
    
    //1. 회원가입
    @PostMapping("/sign-up")
    public ResponseEntity<Map<String, Long>> postMember(@Valid @RequestBody MemberDto.Post memberPostDto){
        Member member =  memberMapper.memberPostToMember(memberPostDto);
        Member savedMember = memberService.create(member);
        Map<String, Long> response = new HashMap<>();
        response.put("memberId", savedMember.getMemberId());

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity findMember(@Positive @PathVariable("member-id") Long memberId){
        Member findMember = memberService.findById(memberId);
        MemberDto.MemberDetailResponse response = memberMapper.memberToMemberDetailResponse(findMember);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @PostMapping("/email")
    public ResponseEntity checkEmail(@RequestBody MemberDto.CheckEmail email){
        boolean check = memberService.checkEmail(email.getEmail());
        Map<String,Boolean> response = new HashMap<>();
        response.put("can-use",check);

        return ResponseEntity.ok(response);
    }


}
