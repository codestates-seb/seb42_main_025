package main_project_025.I6E1.commission.entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import lombok.NoArgsConstructor;
import main_project_025.I6E1.global.auditable.Auditable;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import java.time.LocalDateTime;

@Entity
@Table
@Setter @Getter
@Where(clause = "deleted=false")
@SQLDelete(sql = "UPDATE commission SET deleted = true WHERE id=?")
@NoArgsConstructor
public class Commission extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commissionId;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "mediumtext", nullable = false)
    private String content;

    //Global
   /*

   @Column(name = "created", insertable = false, updatable = false)
    private LocalDateTime created;
    @Column(name = "modified", insertable = false)
    private LocalDateTime modified;
    @Column(name = "deleted")
    private boolean deleted = Boolean.FALSE;
    */

    /* 엔티티 미구현
    @ManyToOne(targetEntity = User.class, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "USER_ID")
    private User user;
    */

    /*  엔티티 미구현
    @OneToMany(mappedBy = "review", cascade = CascadeType.PERSIST)
    private List<Review> reviews = new ArrayList<>();
    */

}
