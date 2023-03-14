package main_project_025.I6E1.tag.repository;

import main_project_025.I6E1.tag.entity.CommissionTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommissionTagRepository extends JpaRepository<CommissionTag, Long> {
}
