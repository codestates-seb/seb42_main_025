package main_project_025.I6E1.trade.controller;

import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.repository.MemberRepository;
import main_project_025.I6E1.commission.entity.Commission;
import main_project_025.I6E1.commission.repository.CommissionRepository;
import main_project_025.I6E1.global.page.PageDto;
import main_project_025.I6E1.trade.dto.TradePatchDto;
import main_project_025.I6E1.trade.dto.TradePostDto;
import main_project_025.I6E1.trade.dto.TradeRespondDto;
import main_project_025.I6E1.trade.entity.Trade;
import main_project_025.I6E1.trade.mapper.TradeMapper;
import main_project_025.I6E1.trade.repository.TradeRepository;
import main_project_025.I6E1.trade.service.TradeService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/trade")
@Validated
@RequiredArgsConstructor
public class TradeController {

    private final TradeService tradeService;
    private final TradeMapper tradeMapper;
    private final TradeRepository tradeRepository;
    private final MemberRepository memberRepository;//test용
    private final CommissionRepository commissionRepository;//test용

    @PostMapping
    public ResponseEntity createTrade(@RequestBody @Valid TradePostDto tradePostDto) {
        Trade trade = tradeMapper.tradePostDtoToTrade(tradePostDto);
        Trade createdTrade = tradeService.createTrade(trade);
        TradeRespondDto tradeRespondDto = tradeMapper.tradeToTradeResponseDto(createdTrade);
        return new ResponseEntity(tradeRespondDto, HttpStatus.OK);
    }

    @PatchMapping("/{tradeId}")
    public ResponseEntity updateTrade(@Valid @RequestBody TradePatchDto tradePatchDto,
                                      @PathVariable("tradeId") @Positive long tradeId) {
        Trade trade = tradeMapper.tradePatchDtoToTrade(tradePatchDto);
        trade.setTradeId(tradeId);
        Trade updatedTrade = tradeService.updateTrade(trade);
        TradeRespondDto tradeRespondDto = tradeMapper.tradeToTradeResponseDto(updatedTrade);
        return new ResponseEntity(tradeRespondDto, HttpStatus.OK);
    }

    @GetMapping("/{tradeId}")
    public ResponseEntity readTrade(@PathVariable("tradeId") @Positive long tradeId) {
        Trade trade = tradeService.readTrade(tradeId);
        return new ResponseEntity(tradeMapper.tradeToTradeResponseDto(trade), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity readAllTrade(Pageable pageable) {
        Page<Trade> tradePage = tradeService.readTrades(pageable);
        List<Trade> tradeList = tradePage.getContent();
        return new ResponseEntity<>(new PageDto<>(tradeMapper.tradesToResponseDto(tradeList), tradePage), HttpStatus.OK);
    }

    @DeleteMapping("/{tradeId}")
    public ResponseEntity deleteTrade(@PathVariable("tradeId") @Positive long tradeId) {
        tradeService.deleteTrade(tradeId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/{testId}")
    public ResponseEntity memberTest(@PathVariable long testId) {
        Member member = new Member();
        member.setMemberId(testId);
        memberRepository.save(member);
        String test = "test";
        Commission commission = new Commission();
        commission.setCommissionId(testId);
        commission.setContent(test);
        commission.setTitle(test);
        commissionRepository.save(commission);
        return new ResponseEntity(HttpStatus.OK);
    }
}

