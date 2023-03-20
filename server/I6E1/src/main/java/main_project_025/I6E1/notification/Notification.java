package main_project_025.I6E1.notification;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.global.auditable.Auditable;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@SQLDelete(sql = "UPDATE Notification SET deleted = true WHERE notification_id = ?")
@Where(clause = "deleted = false")//where절에 반드시 포함되는 조건 설정 -> deleted = false -> 지워지지 않은 로우 -> 하지만 nativeQuery에는 적용 X
public class Notification extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long notificationId;

    private String content;

    private Boolean isRead;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
