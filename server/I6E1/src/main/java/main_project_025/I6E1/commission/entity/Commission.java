package main_project_025.I6E1.commission.entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import lombok.NoArgsConstructor;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.global.auditable.Auditable;
import main_project_025.I6E1.review.entity.Review;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Setter @Getter
@SQLDelete(sql = "UPDATE commission SET deleted = true WHERE commission_id=?")
@Where(clause = "deleted=false")
@Entity
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

}
