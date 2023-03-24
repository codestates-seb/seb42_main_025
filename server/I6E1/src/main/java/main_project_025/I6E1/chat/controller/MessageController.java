package main_project_025.I6E1.chat.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.chat.entity.ChatRoom;
import main_project_025.I6E1.chat.entity.Message;
import main_project_025.I6E1.chat.mapper.ChatRoomMapper;
import main_project_025.I6E1.chat.repository.ChatRoomRepository;
import main_project_025.I6E1.chat.service.ChatService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Transactional
@RestController
@RequiredArgsConstructor
public class MessageController {
    private SimpMessagingTemplate template;
    private ChatService chatService;
    private ChatRoomRepository chatRoomRepository;
    private ChatRoomMapper mapper;

    // MessageMapping 을 통해 webSocket 로 들어오는 메시지를 발신 처리한다.
    // 이때 클라이언트에서는 /pub/chat/~ 로 요청하게 되고 이것을 controller 가 받아서 처리
    // 처리가 완료되면 /sub/chat/room/roomId 로 메시지가 전송된다.
    @MessageMapping("/message/enterUser")
    public void enterUser(@Payload Message message,
                          SimpMessageHeaderAccessor headerAccessor){
        message.setMessage(message.getMessage());




    }
}
