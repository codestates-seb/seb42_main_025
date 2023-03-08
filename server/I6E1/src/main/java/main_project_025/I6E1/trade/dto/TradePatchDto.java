package main_project_025.I6E1.trade.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import main_project_025.I6E1.trade.entity.Status;

import javax.validation.constraints.NotEmpty;

@Getter
@NoArgsConstructor
public class TradePatchDto {

    @NotEmpty(message = "요청을 확인해주세요")
    private Status status;
}
