package main_project_025.I6E1.trade.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;


public enum Status {
    Waiting_Acceptance("수락대기"),
    In_Progress("진행 중"),
    Rejected("거절"),
    Done("완료");

    @Getter
    private final String krName;

    Status(String krName) {
        this.krName = krName;
    }

    @JsonCreator
    public static Status from(String krName) {
        for (Status status : Status.values()) {
            if (status.getKrName().equals(krName)) {
                return status;
            }
        }
        return null;
    }

    @JsonValue
    public String getStatus() {
        return krName;
    }
}
