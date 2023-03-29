package main_project_025.I6E1.Member.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.Member.dto.MemberDto;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.mapper.MemberMapper;
import main_project_025.I6E1.global.exception.BusinessException;
import main_project_025.I6E1.global.exception.ExceptionCode;
import main_project_025.I6E1.global.response.SingleResponseDto;
import main_project_025.I6E1.Member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.HashMap;
import java.util.Map;
import main_project_025.I6E1.auth.enums.Roles;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/members")
@RestController
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    //1. 회원가입
    @PostMapping("/sign-up")
    public ResponseEntity<SingleResponseDto<MemberDto.MemberDetailResponse>> postMember(@Valid @RequestBody MemberDto.Post memberPostDto) {
        Member member = memberMapper.memberPostToMember(memberPostDto);

        Roles role = Roles.AUTHOR;
        if (memberPostDto.getRoles() != null && !memberPostDto.getRoles().isEmpty()) {
            String roleName = String.valueOf(memberPostDto.getRoles().get(0));
            if (roleName != null) {
                try {
                    role = Roles.valueOf(roleName.toUpperCase());
                } catch (IllegalArgumentException e) {
                    throw new BusinessException(ExceptionCode.NOT_AUTHORITY);
                }
            }
        }

        Member savedMember = memberService.create(member, role);
        MemberDto.MemberDetailResponse response = memberMapper.memberToMemberDetailResponse(savedMember);

        return ResponseEntity.status(HttpStatus.CREATED).body(new SingleResponseDto<>(response));
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
        response.put("email",check);

        return ResponseEntity.ok(response);
    }
}
