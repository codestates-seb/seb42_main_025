package main_project_025.I6E1.chat.dto;

import lombok.*;
import main_project_025.I6E1.Member.dto.MemberDto;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.chat.entity.ChatRoom;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.ArrayList;
import java.util.List;

public class ChatRoomDto {
    @Getter @Setter
    @AllArgsConstructor
    public static class Post {
        private Long userId;

        @ManyToOne
        @JoinColumn(name = "user_id")
        private main_project_025.I6E1.Member.entity.Member user;
        @ManyToOne
        @JoinColumn(name = "author_id")
        private Member author;
    }

    @Getter @Setter
    @NoArgsConstructor
    public static class Response{
        private String roomId;
        private String user;
        private String author;
    }
}
