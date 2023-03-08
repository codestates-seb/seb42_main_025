package main_project_025.I6E1.trade.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import main_project_025.I6E1.trade.entity.Status;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class TradeRespondDto {
    private Long tradeId;
    private Long commissionId;
    private Long userId;
    private String content;
    private Status status;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}