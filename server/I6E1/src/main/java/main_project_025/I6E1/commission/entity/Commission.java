package main_project_025.I6E1.commission.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.global.auditable.Auditable;
import main_project_025.I6E1.tag.entity.CommissionTag;
import main_project_025.I6E1.trade.entity.Trade;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Setter @Getter
@Where(clause = "deleted=false")
@SQLDelete(sql = "UPDATE commission SET deleted = true WHERE commission_id=?")
@NoArgsConstructor
public class Commission extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commissionId;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "mediumtext", nullable = false)
    private String content;

    @ManyToOne(targetEntity = Member.class, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "commission")//cascade 추가??
    private List<Trade> trades = new ArrayList<>();

    @OneToMany(mappedBy = "commission")//tag 매핑
    private List<CommissionTag> tags = new ArrayList<>();

    public void setTrade(Trade trade) {
        this.getTrades().add(trade);
        if (trade.getCommission() != this) {
            trade.setCommission(this);
        }
    }
}
