package main_project_025.I6E1.trade.repository;

import main_project_025.I6E1.trade.entity.Trade;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TradeRepository extends JpaRepository<Trade, Long> {

    @Query(value = "SELECT * FROM trade WHERE member_id = :memberId", nativeQuery = true)
    Page<Trade> findByMemberId(Pageable pageRequest, Long memberId);
}
