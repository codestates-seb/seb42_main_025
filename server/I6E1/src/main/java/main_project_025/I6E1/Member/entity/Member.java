package main_project_025.I6E1.Member.entity;

import lombok.Getter;
import lombok.Setter;
import main_project_025.I6E1.global.auditable.Auditable;
import main_project_025.I6E1.trade.entity.Trade;

import javax.persistence.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Member extends Auditable {

    @Id
    private Long memberId;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String name;
    
    //멤버 프로필에 사진이 필요
    //형태가 바뀌면 변경 필요함
//    private Image image;

    //멤버 권한
//    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = {CascadeType.ALL})
    private List<Trade> trades = new ArrayList<>();

    public void setTrade(Trade trade) {
        this.getTrades().add(trade);
        if (trade.getMember() != this) {
            trade.setMember(this);
        }
    }
}
