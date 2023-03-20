package main_project_025.I6E1.notification;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class TradeWebSocketHandler extends TextWebSocketHandler {
    private final NotificationRepository notificationRepository;
    private final ObjectMapper objectMapper;

    public TradeWebSocketHandler(NotificationRepository notificationRepository, ObjectMapper objectMapper) {
        this.notificationRepository = notificationRepository;
        this.objectMapper = objectMapper;
    }

    private static final Logger logger = LoggerFactory.getLogger(WebSocketHandler.class);
    // 로그인 한 전체
    List<WebSocketSession> sessions = new ArrayList<WebSocketSession>();
    // 1대1
    Map<String, WebSocketSession> userSessionMap = new HashMap<String, WebSocketSession>();

    //클라이언트가 서버에 접속 성공 시 호출
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception{
        logger.info("Socket 연결");
        sessions.add(session);
        logger.info(currentUserName(session));
        userSessionMap.put(currentUserName(session), session);
    }

    //클라이언트가 연결이 끊겼을 떄 호출
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) {
        logger.info("Socket 끊음");
        sessions.remove(session);
        userSessionMap.remove(currentUserName(session), session);
    }

    //WebSocket 클라이언트로부터 텍스트 메시지가 도착했을 때 호출. WebSocketSession 세션과 함께 도착한 메시지 TextMessage를 파라미터로 받아들인다.
    //handleTextMessage를 사용하여 도착한 텍스트 메시지를 처리할 수 있다. ex)메시지를 파싱하여 사용자의 요청을 이해하고 응답 반환, WebSocket을 통해 메시지를 다른 클라이언트로 전달
//    @Override
//    protected void handleTextMessage(WebSocketSession session, TextMessage message) {
//
//        for (WebSocketSession single : sessions) {
//            String memberId = message.getPayload();
//        }
//    }
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message){
        try {
            // 전달받은 메시지를 JSON으로 파싱하여 Notification 객체로 변환합니다.
            Notification notification = objectMapper.readValue(message.getPayload(), Notification.class);

            // Notification 객체에 저장된 memberId를 기반으로 WebSocketSessionMap에서 해당하는 세션을 찾아냅니다.
            WebSocketSession userSession = userSessionMap.get(notification.getMember().getMemberId());

            // 세션이 존재하고 연결이 열려있다면, 알림 메시지를 전송합니다.
            if (userSession != null && userSession.isOpen()) {
                userSession.sendMessage(new TextMessage(objectMapper.writeValueAsString(notification)));
            } else {
                // 세션이 존재하지 않거나 연결이 닫혀있다면, 알림을 저장합니다.
                notificationRepository.save(notification);
            }
        } catch (IOException e) {
            logger.error("Error handling WebSocket message.", e);
        }
    }

    private void sendTextMessageToUser(String memberId, Object message) {
        WebSocketSession session = userSessionMap.get(memberId);
        if (session != null && session.isOpen()) {
            try {
                session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
            } catch (IOException e) {
                logger.error("Error sending message to user with memberId: {}", memberId, e);
            }
        } else {
            logger.warn("WebSocket session not found or closed for user with memberId: {}", memberId);
        }
    }

    private String currentUserName(WebSocketSession session) {
        String mid = session.getPrincipal().getName();
        return mid;
    }
}