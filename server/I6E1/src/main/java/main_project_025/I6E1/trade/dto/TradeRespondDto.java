package main_project_025.I6E1.trade.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main_project_025.I6E1.trade.entity.Status;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class TradeRespondDto {
    private Long tradeId;
    private Long commissionId;
    private Long memberId;
    private String title;
    private String content;
    private Status status;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}