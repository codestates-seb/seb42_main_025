package main_project_025.I6E1.tag.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main_project_025.I6E1.commission.entity.Commission;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class CommissionTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commissionTagId;

    @ManyToOne
    @JoinColumn(name = "commission_id")
    private Commission commission;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;

    private String tagName;//Tag 엔티티의 tagName 컬럼의 스냅샷

    public CommissionTag(Tag tag) {//tag test
        this.tag = tag;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
        this.tagName = tag.getTagName(); // Tag 엔티티의 tagName 필드를 CommissionTag 엔티티의 tagName 필드에 복사
    }
}