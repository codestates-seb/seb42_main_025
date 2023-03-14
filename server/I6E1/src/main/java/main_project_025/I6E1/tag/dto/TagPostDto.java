package main_project_025.I6E1.tag.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
public class TagPostDto {

    @NotEmpty
    private String tagName;
}
