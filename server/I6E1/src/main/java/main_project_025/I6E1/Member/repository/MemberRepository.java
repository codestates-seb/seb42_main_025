package main_project_025.I6E1.Member.repository;

import main_project_025.I6E1.Member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Long> {
}
