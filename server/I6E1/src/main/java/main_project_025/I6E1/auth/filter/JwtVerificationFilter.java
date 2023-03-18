package main_project_025.I6E1.auth.filter;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.auth.jwt.JwtTokenizer;
import main_project_025.I6E1.auth.userdetails.AuthMember;
import main_project_025.I6E1.auth.utils.CustomAuthorityUtils;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@RequiredArgsConstructor
public class JwtVerificationFilter extends OncePerRequestFilter {
    // JwtTokenizer : JWT 검증 및 토큰 정보 획득 역할
    private final JwtTokenizer jwtTokenizer;
    // JWT 검증에 성공하면 Authentication 객체에 채울 사용자의 권한을 생성하는 역할
    private final CustomAuthorityUtils customAuthorityUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        try {
            //verifyJws() : JWT를 검증하는데 사용
            Map<String, Object> claims = verifyJws(request);
            // Authentication 객체를 SecurityContext에 저장
            setAuthenticationToContext(claims);
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }

        // 다음 필터(사큐리티 필터) 호출
        filterChain.doFilter(request, response);
    }

    //특정 조건에 부합하면(true이면) 해당 Filter의 동작을 수행하지 않고 다음 Filter로 건너뛰도록 해줌
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request)throws ServletException{
        // Authorization header의 값을 얻음
        String authorization = request.getHeader("Authorization");

        //값이 null / Authorization header의 값이 “Bearer”로 시작하지 않는다면
        //해당 Filter의 동작을 수행하지 않도록 정의
        return authorization == null || !authorization.startsWith("Bearer");
    }

    private Map<String, Object> verifyJws(HttpServletRequest request){
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        String base64EncodedSecretKey =
                jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        Map<String,Object> claims = jwtTokenizer.getClaims(jws,base64EncodedSecretKey).getBody();

        return claims;
    }

    private void setAuthenticationToContext(Map<String, Object> claims) throws JsonProcessingException {
        ObjectMapper objectMapper= new ObjectMapper();
        //JWT에서 파싱한 claims에서 username를 얻음
        Long id = Long.valueOf(String.valueOf(claims.get("memberId"))); //claims 키 null로 들어가서 추가해줌
        String name = (String) claims.get("username");
        List<String> roles = ((List<LinkedHashMap<String, String>>) claims.get("roles")).stream()
                .map(role -> role.get("authority"))
                .collect(Collectors.toList());

        //Claims 의 권한정보를 기반으로 List<GrantedAuthority> 생성
//        List<GrantedAuthority> authorities =
//                customAuthorityUtils.createAuthorities((List)claims.get("roles"));

        var authMember = AuthMember.of(id, name, roles);
        Authentication authentication
                = new UsernamePasswordAuthenticationToken(authMember, null,
                roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList())); //name이 아닌 authMember 객체 필요
        // SecurityContext에 Authentication 객체를 저장
        SecurityContextHolder.getContext().setAuthentication(authentication);

    }

}
