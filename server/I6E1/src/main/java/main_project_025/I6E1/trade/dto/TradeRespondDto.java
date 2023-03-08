package main_project_025.I6E1.trade.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class TradeRespondDto {
    private Long tradeId;
    private Long commissionId;
    private Long userId;
    private String content;
//    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}