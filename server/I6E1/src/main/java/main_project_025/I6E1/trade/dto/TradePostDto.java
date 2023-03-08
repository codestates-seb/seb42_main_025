package main_project_025.I6E1.trade.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import main_project_025.I6E1.trade.entity.Status;

import javax.validation.constraints.NotEmpty;

@Getter
@NoArgsConstructor
public class TradePostDto {

    @NotEmpty(message = "내용을 작성해야 합니다.")
    private String content;
}
