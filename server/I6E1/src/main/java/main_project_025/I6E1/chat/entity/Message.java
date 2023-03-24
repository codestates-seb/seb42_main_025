package main_project_025.I6E1.chat.entity;

import lombok.*;

import javax.persistence.*;

@Getter @Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    public enum MessageType{
        ENTER, TALK;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long messageId;
    private Long roomId;
    private MessageType type;
    private String message;
    private String nickname;

    public void newConnect() {
        this.type = MessageType.ENTER;
    }

}
