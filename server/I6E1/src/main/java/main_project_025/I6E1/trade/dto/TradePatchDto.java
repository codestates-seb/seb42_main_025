package main_project_025.I6E1.trade.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main_project_025.I6E1.trade.entity.Status;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class TradePatchDto {

    private long commissionId;
    private long memberId;
    @NotNull(message = "요청을 확인해주세요")
    private Status status;

    @JsonProperty("status")
    public void setStatus(String status) {
        if (status != null) {
            this.status = Status.from(status);
        }
    }
//    @JsonProperty("status")
//    public void setStatus(String status) {
//        if (status != null) {
//            switch (status) {
//                case "완료":
//                    this.status = Status.Done;
//                    break;
//                case "수락대기":
//                    this.status = Status.Waiting_Acceptance;
//                    break;
//                case "진행 중":
//                    this.status = Status.In_Progress;
//                    break;
//                default:
//                    this.status = Status.from(status);
//                    break;
//            }
//        }
//    }
}