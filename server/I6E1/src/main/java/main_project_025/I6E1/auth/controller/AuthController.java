package main_project_025.I6E1.auth.controller;


import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.service.MemberService;
import main_project_025.I6E1.auth.jwt.JwtTokenizer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class AuthController {
    private MemberService memberService;
    private JwtTokenizer jwtTokenizer;

    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        return ResponseEntity.ok().build();
    }

    //Access Token 재발급
    public ResponseEntity<Void> resetRefreshToken(@PathVariable("member-id") Long memberId) {
        Member member = memberService.findById(memberId);
        String accessToken = delegateAccessToken(member);
        return ResponseEntity.ok().header("Authorization", "Bearer " +accessToken)
                .build();
    }

    private String delegateAccessToken(Member member) {
        Map<String, Object> claims = new HashMap<>(); //클레임
        claims.put("memberId", member.getMemberId());
        claims.put("name", member.getEmail());
        claims.put("roles", member.getRoles());

        //jwt 제목
        String subject = member.getEmail();
        //token 만료 시간
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        String base64EncodeSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        return jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodeSecretKey);
    }
}