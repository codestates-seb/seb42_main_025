package main_project_025.I6E1.chat.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.chat.entity.ChatRoom;
import main_project_025.I6E1.chat.repository.ChatRoomRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.List;

@Slf4j
@Getter
@AllArgsConstructor
@Service
public class ChatService {
    private ObjectMapper objectMapper;
    private ChatRoomRepository chatRoomRepository;

    public ChatRoom createRoom(ChatRoom chatRoom, Member user, Member author){
        chatRoom.setUser(user);
        chatRoom.setAuthor(author);
        return chatRoomRepository.save(chatRoom);
    }

    public List<ChatRoom> findChatRoomsByMemberId(Long memberId){
        return chatRoomRepository.findByMemberId(memberId);
    }

    public <T> void sendMessage(WebSocketSession session, T message) {
        try {
            session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
        }
        catch (IOException e) {
            log.error(e.getMessage(), e);
        }
    }

    public void deleteChatRoom(Long roomId){
        chatRoomRepository.deleteById(roomId);
    }
}
