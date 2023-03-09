package main_project_025.I6E1.trade.service;

import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.commission.entity.Commission;
import main_project_025.I6E1.commission.repository.CommissionRepository;
import main_project_025.I6E1.trade.dto.TradePatchDto;
import main_project_025.I6E1.trade.dto.TradePostDto;
import main_project_025.I6E1.trade.entity.Trade;
import main_project_025.I6E1.trade.repository.TradeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class TradeService {

    private final TradeRepository tradeRepository;
    private final CommissionRepository commissionRepository;


    public Trade createTrade(Trade trade) {
        //유저검증(사용자 role만 신청 가능할지 둘 다 가능하게 할지?)
        findCommissionById(trade.getCommission().getCommissionId());//커미션 검증
        Member member = new Member();
        member.setMemberId(1L);
        trade.setMember(member);
        //거래 있는지 확인?? -> 있으면 알림? -> 굳이 할 필요는 없을듯?
        return tradeRepository.save(trade);
    }

    public Trade updateTrade(Trade trade) {
        //유저의 role을 검색해서 작가일 경우에만 수정가능하게?
        Trade findTrade = findTradeById(trade.getTradeId());//거래 검증
        findCommissionById(findTrade.getCommission().getCommissionId());//커미션 검증
        trade.setContent(findTrade.getContent());
        trade.setTitle(findTrade.getTitle());
        trade.setStatus(trade.getStatus());
        return tradeRepository.save(trade);
    }

    public Trade readTrade(long tradeId) {
        //유저 검증 필요할듯
        Trade findTrade = findTradeById(tradeId);
        return findTrade;
    }

    public Page<Trade> readTrades(Pageable pageable) {
        //유저 검증 필요할듯
        Pageable pageRequest = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), pageable.getSort());
        return tradeRepository.findAll(pageRequest);
    }

    public void deleteTrade(long tradeId) {
        //유저 검증
        //커미션 검증은 굳이 필요 없을 것 같긴 한데 얘기해볼것
        findTradeById(tradeId);//거래 검증
        tradeRepository.deleteById(tradeId);
    }

    public Trade findTradeById(long tradeId) {
        Optional<Trade> optionalTrade = tradeRepository.findById(tradeId);
        Trade trade = optionalTrade.orElseThrow(() -> new RuntimeException("존재하지 않는 거래입니다."));
        return trade;
    }

    public Commission findCommissionById(long commissionId) {
        Optional<Commission> optionalCommission = commissionRepository.findById(commissionId);
        Commission commission = optionalCommission.orElseThrow(() -> new RuntimeException("존재하지 않는 판매글입니다."));
        return commission;
    }
}