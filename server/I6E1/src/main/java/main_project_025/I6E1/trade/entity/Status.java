package main_project_025.I6E1.trade.entity;

public enum Status {
    Waiting_Acceptance("수락 대기"),
    In_Progress("진행 중"),
    Done("완료");

    private String krName;

    Status(String krName) {
        this.krName = krName;
    }

    public String getKrName() {
        return krName;
    }
}
