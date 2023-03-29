package main_project_025.I6E1.chat.entity;

import lombok.*;
import main_project_025.I6E1.member.entity.Member;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Where(clause = "used=true")
public class ChatRoom {

    @Id
    @Column(name = "room_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomId;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "MEMBER_ID")
    private Member user;
    @ManyToOne
    @JoinColumn(name = "author_id", referencedColumnName = "MEMBER_ID")
    private Member author;

    @Column(name = "user_back")
    private Long userBack;
    @Column(name = "author_back")
    private Long authorBack;

    @Builder
    public ChatRoom(Long roomId){
        this.roomId = roomId;
    }

    @Column(name = "used")
    private boolean used = Boolean.FALSE;
}
