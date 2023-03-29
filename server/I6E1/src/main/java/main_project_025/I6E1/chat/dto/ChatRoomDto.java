package main_project_025.I6E1.chat.dto;

import lombok.*;
import main_project_025.I6E1.member.entity.Member;

public class ChatRoomDto {
    @Getter @Setter
    @NoArgsConstructor
    public static class Response{
        private Long roomId;
        private Member author;
    }
}
