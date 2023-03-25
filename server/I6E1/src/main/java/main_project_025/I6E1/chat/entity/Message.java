package main_project_025.I6E1.chat.entity;

import lombok.*;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.global.auditable.Auditable;

import javax.persistence.*;

@Getter @Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Message extends Auditable {
    public enum MessageType{
        ENTER, TALK;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long messageId;
    private Long roomId;
    private MessageType type;
    private String message;

    @ManyToOne(targetEntity = Member.class, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
}
