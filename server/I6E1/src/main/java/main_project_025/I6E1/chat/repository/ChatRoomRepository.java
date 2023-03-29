package main_project_025.I6E1.chat.repository;

import main_project_025.I6E1.member.entity.Member;
import main_project_025.I6E1.chat.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {
    List<ChatRoom> findByUserOrAuthor(Member user, Member author);
    ChatRoom findByUserBackAndAuthorBack(long userBack, long authorBack);
}
