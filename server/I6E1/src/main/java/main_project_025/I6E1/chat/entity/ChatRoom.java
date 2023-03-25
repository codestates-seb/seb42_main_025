package main_project_025.I6E1.chat.entity;

import lombok.*;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.chat.service.ChatService;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.springframework.web.socket.WebSocketSession;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Where(clause = "used=false")
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
