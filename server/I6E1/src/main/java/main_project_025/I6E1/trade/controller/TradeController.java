package main_project_025.I6E1.trade.controller;

import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.trade.dto.TradePatchDto;
import main_project_025.I6E1.trade.dto.TradePostDto;
import main_project_025.I6E1.trade.dto.TradeRespondDto;
import main_project_025.I6E1.trade.entity.Trade;
import main_project_025.I6E1.trade.mapper.TradeMapper;
import main_project_025.I6E1.trade.repository.TradeRepository;
import main_project_025.I6E1.trade.service.TradeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/trade")
@Validated
@RequiredArgsConstructor
public class TradeController {

    private final TradeService tradeService;
    private final TradeMapper tradeMapper;
    private final TradeRepository tradeRepository;

    @PostMapping
    public ResponseEntity createTrade(@Valid @RequestBody TradePostDto tradePostDto) {
        Trade trade = tradeMapper.tradePostDtoToTrade(tradePostDto);
        Trade createdTrade = tradeService.createTrade(trade);
        TradeRespondDto tradeRespondDto = tradeMapper.tradeToTradeResponseDto(createdTrade);
        return new ResponseEntity(tradeRespondDto, HttpStatus.OK);
    }

    @PatchMapping("/{tradeId}")
    public ResponseEntity updateTrade(@Valid @RequestBody TradePatchDto tradePatchDto,
                                      @PathVariable("tradeId") @Positive long tradeId) {
        Trade trade = tradeMapper.tradePatchDtoToTrade(tradePatchDto);
        Trade updatedTrade = tradeService.updateTrade(trade);
        return new ResponseEntity(tradeMapper.tradeToTradeResponseDto(updatedTrade), HttpStatus.OK);
    }

    @GetMapping("/{tradeId}")
    public ResponseEntity readTrade(@PathVariable("tradeId") @Positive long tradeId) {
        Trade trade = tradeService.readTrade(tradeId);
        return new ResponseEntity(tradeMapper.tradeToTradeResponseDto(trade), HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity readAllTrade() {
//
//    }

    @DeleteMapping("/{tradeId}")
    public ResponseEntity deleteTrade(@PathVariable("tradeId") @Positive long tradeId) {
        tradeService.deleteTrade(tradeId);
        return new ResponseEntity(HttpStatus.OK);
    }
}
