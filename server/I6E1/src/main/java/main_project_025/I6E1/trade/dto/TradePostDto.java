package main_project_025.I6E1.trade.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class TradePostDto {

    private long commissionId;
    @NotNull(message = "내용을 작성해야 합니다.")
    private String content;
    @NotNull(message = "제목을 작성해야 합니다.")
    private String title;
}
