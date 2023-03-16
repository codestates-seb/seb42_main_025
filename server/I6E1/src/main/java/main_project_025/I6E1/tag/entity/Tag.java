package main_project_025.I6E1.tag.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @NotEmpty
    @Column(unique = true)
    private String tagName;

    @OneToMany(mappedBy = "tag")
    private List<CommissionTag> commissions = new ArrayList<>();

    public Tag(String tagName) {
        this.tagName = tagName;
        this.commissions = new ArrayList<>();
    }
}
