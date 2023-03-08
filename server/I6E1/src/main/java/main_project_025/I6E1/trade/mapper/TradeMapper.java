package main_project_025.I6E1.trade.mapper;

import main_project_025.I6E1.trade.dto.TradePatchDto;
import main_project_025.I6E1.trade.dto.TradePostDto;
import main_project_025.I6E1.trade.dto.TradeRespondDto;
import main_project_025.I6E1.trade.entity.Trade;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TradeMapper {

    Trade tradePostDtoToTrade(TradePostDto tradePostDto);

    Trade tradePatchDtoToTrade(TradePatchDto tradePatchDto);

    TradeRespondDto tradeToTradeResponseDto(Trade trade);
}
