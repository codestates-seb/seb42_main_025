package main_project_025.I6E1.trade.mapper;

import main_project_025.I6E1.trade.dto.TradePatchDto;
import main_project_025.I6E1.trade.dto.TradePostDto;
import main_project_025.I6E1.trade.dto.TradeRespondDto;
import main_project_025.I6E1.trade.entity.Trade;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TradeMapper {

    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "commissionId", target = "commission.commissionId")
    Trade tradePostDtoToTrade(TradePostDto tradePostDto);
    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "commissionId", target = "commission.commissionId")
    Trade tradePatchDtoToTrade(TradePatchDto tradePatchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "commission.commissionId", target = "commissionId")
    TradeRespondDto tradeToTradeResponseDto(Trade trade);

    List<TradeRespondDto> tradesToResponseDto(List<Trade> trades);
}
