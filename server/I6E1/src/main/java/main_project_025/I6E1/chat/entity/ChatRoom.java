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
@Where(clause = "deleted=false")
@SQLDelete(sql = "UPDATE ChatRoom SET deleted = true WHERE room_id=?")
public class ChatRoom {

    @Id
    @Column(name = "room_id")
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String roomId;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Member user;
    @ManyToOne
    @JoinColumn(name = "author_id")
    private Member author;

    @Builder
    public ChatRoom(String roomId){
        this.roomId = roomId;
    }

    @Column(name = "deleted")
    private boolean deleted = Boolean.FALSE;

    public void handlerActions(WebSocketSession session, Message message, ChatService chatService){
        Set<WebSocketSession> sessions = new HashSet<>();

        if (message.getType().equals(Message.MessageType.ENTER)){
            sessions.add(session);
            message.setMessage(message.getNickname() + "님이 대화를 시작하였습니다");
            sendMessage(message, chatService);
        } else if (message.getType().equals(Message.MessageType.TALK)) {
            message.setMessage(message.getMessage());
            sendMessage(message, chatService);
        }
    }

    public <T> void sendMessage(T message, ChatService chatService){
        Set<WebSocketSession> sessions = new HashSet<>();
        sessions.parallelStream().forEach(session -> chatService.sendMessage(session, message));
    }
}
