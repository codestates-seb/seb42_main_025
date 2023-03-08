package main_project_025.I6E1.trade.service;

import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.trade.dto.TradePatchDto;
import main_project_025.I6E1.trade.dto.TradePostDto;
import main_project_025.I6E1.trade.entity.Trade;
import main_project_025.I6E1.trade.repository.TradeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class TradeService {

    private final TradeRepository tradeRepository;

    public Trade createTrade(Trade trade) {
        //유저검증
        return tradeRepository.save(trade);
    }

    public Trade updateTrade(Trade trade) {
        //유저검증

        Trade findTrade = findTradeById(trade.getTradeId());

        //nullable 고민 후 옵셔널 줄 지 고민
        return tradeRepository.save(findTrade);
    }

    public Trade readTrade(long tradeId) {
        Trade foundTrade = findTradeById(tradeId);
        return foundTrade;
    }

    public void deleteTrade(long tradeId) {
        //유저 검증
        //커미션 검증
        tradeRepository.deleteById(tradeId);
    }

    public Trade findTradeById(long tradeId) {
        Optional<Trade> optionalTrade = tradeRepository.findById(tradeId);
        Trade trade = optionalTrade.orElseThrow(() -> new RuntimeException("존재하지 않는 거래입니다."));
        return trade;
    }
}
