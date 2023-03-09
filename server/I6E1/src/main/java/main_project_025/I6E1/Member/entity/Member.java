package main_project_025.I6E1.Member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main_project_025.I6E1.global.auditable.Auditable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member extends Auditable {

    @Id
    private Long memberId;

    @Column(unique = true)
    private String email;

    @Column
    private String password;

    @Column(unique = true)
    private String name;
    
    //멤버 프로필에 사진이 필요
    //형태가 바뀌면 변경 필요함
    private Image image;

    //멤버 권한
    private List<String> roles = new ArrayList<>();
}
