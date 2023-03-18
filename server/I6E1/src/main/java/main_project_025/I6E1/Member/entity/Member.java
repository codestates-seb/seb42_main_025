package main_project_025.I6E1.Member.entity;

import lombok.*;
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
    
    //멤버 프로필에 사진이 필요
    //형태가 바뀌면 변경 필요함
    //private Image image;

    //멤버 권한
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

//    @Builder
//    public Member(Long memberId, String email, String password, String roles) {
//        this.memberId = memberId;
//        this.email = email;
//        this.password = password;
//        this.roles.add(roles);
//    }
//
//    public Member(Long memberId, String email, String password, List<String> roles) {
//        this.memberId = memberId;
//        this.email = email;
//        this.password = password;
//        this.roles = roles;
//    }
//
    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)//cascade추가
    private List<Trade> trades = new ArrayList<>();

    public void setTrade(Trade trade) {
        this.getTrades().add(trade);
        if (trade.getMember() != this) {
            trade.setMember(this);
        }
    }
}
