package main_project_025.I6E1.tag.mapper;

import main_project_025.I6E1.tag.dto.TagPostDto;
import main_project_025.I6E1.tag.dto.TagRespondDto;
import main_project_025.I6E1.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {

    Tag tagPostDtoToTag(TagPostDto tagPostDto);

    TagRespondDto tagToTagRespondDto(Tag tag);

    List<TagRespondDto> tagToRespondDto(List<Tag> tags);
}
