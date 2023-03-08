package main_project_025.I6E1.trade.entity;

import lombok.Getter;
import main_project_025.I6E1.auditing.Auditable;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Entity
@SQLDelete(sql = "UPDATE Trade SET deleted = true WHERE tradeId = ?")
@Where(clause = "deleted = false")//where절에 반드시 포함되는 조건 설정 -> deleted = false -> 지워지지 않은 로우 -> 하지만 nativeQuery에는 적용 X
public class Trade extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tradeId;

//    @ManyToOne
//    @JoinColumn(name = "commission_id")
//    private Commission commission;

//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user

    @Column(columnDefinition = "MEDIUMTEXT")
    private String content;

    @NotNull
    private Status status = Status.Waiting_Acceptance;

    private boolean deleted = Boolean.FALSE;
}
