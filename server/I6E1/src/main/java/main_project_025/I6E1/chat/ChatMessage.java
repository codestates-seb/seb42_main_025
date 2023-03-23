package main_project_025.I6E1.chat;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ChatMessage {

    // 메세지 종류 : 입장, 채팅
    public enum MessageType {
        ENTER, TALK, JOIN
    }

    private MessageType type; // 메시지 타입
    private String roomId; //방번호
    private String sender; // 보낸사람
    private String message; // 메세지
}
