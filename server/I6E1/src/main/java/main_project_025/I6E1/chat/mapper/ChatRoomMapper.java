package main_project_025.I6E1.chat.mapper;

import main_project_025.I6E1.chat.dto.ChatRoomDto;
import main_project_025.I6E1.chat.entity.ChatRoom;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ChatRoomMapper {
    ChatRoomDto.Response chatRoomToResponse(ChatRoom room);
    List<ChatRoomDto.Response> chatRoomToResponse(List<ChatRoom> rooms);
}
