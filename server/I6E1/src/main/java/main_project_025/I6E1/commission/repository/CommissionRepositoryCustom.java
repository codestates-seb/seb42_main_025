package main_project_025.I6E1.commission.repository;

import main_project_025.I6E1.commission.entity.Commission;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CommissionRepositoryCustom {
    Page<Commission> findBySearchOption(Pageable pageable, String title, String name, List<String> tags);
}
