package main_project_025.I6E1.Member.entity;

import lombok.*;
import main_project_025.I6E1.auth.enums.Roles;
import main_project_025.I6E1.chat.entity.ChatRoom;
import main_project_025.I6E1.global.auditable.Auditable;
import main_project_025.I6E1.trade.entity.Trade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member extends Auditable {

    @Id
    @Column(name = "member_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(unique = true)
    private String email;

    @Column
    private String password;

    @Column(unique = true)
    private String nickname;

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    private List<Roles> roles = new ArrayList<>();

    public void setRoles(List<Roles> roles) {
        this.roles = roles;
    }

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Trade> trades = new ArrayList<>();

    public void setTrade(Trade trade) {
        this.getTrades().add(trade);
        if (trade.getMember() != this) {
            trade.setMember(this);
        }
    }
}
