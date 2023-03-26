package main_project_025.I6E1.chat.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.chat.dto.ChatRoomDto;
import main_project_025.I6E1.chat.entity.ChatRoom;
import main_project_025.I6E1.chat.mapper.ChatRoomMapper;
import main_project_025.I6E1.chat.service.ChatService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/rooms")
public class RoomController {

    private final ChatService chatService;
    private final ChatRoomMapper mapper;

    @PostMapping("/{author_id}")
    public ResponseEntity createRoom(@PathVariable("author_id")long authorId) {
        ChatRoom room = chatService.createRoom(authorId);
        ChatRoomDto.Response response = mapper.chatRoomToResponse(room);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity findMyRooms(){
        List<ChatRoom> chatRoomList = chatService.findChatRooms();
        List<ChatRoomDto.Response> responses = mapper.chatRoomToResponse(chatRoomList);
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    @DeleteMapping("/{room_id}")
    public ResponseEntity deleteRoom(@PathVariable("room_id")long roomId) {
        chatService.deleteChatRoom(roomId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
