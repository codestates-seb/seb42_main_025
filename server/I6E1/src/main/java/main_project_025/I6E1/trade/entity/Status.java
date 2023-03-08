package main_project_025.I6E1.trade.entity;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

public enum Status {
    Waiting_Acceptance("수락대기"),
    In_Progress("진행 중"),
    Done("완료");

    @Getter
    @JsonValue
    private final String krName;

    Status(String krName) {
        this.krName = krName;
    }
}
