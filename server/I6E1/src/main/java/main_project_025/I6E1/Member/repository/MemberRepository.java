package main_project_025.I6E1.Member.repository;

import main_project_025.I6E1.Member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {
    //이메일 확인을 위함
    Optional<Member> findByEmail(String email);

    //닉네임 확인을 위함
    //나중에 필요없으면 지울 예정
    Optional<Member> findByName(String name);
}
