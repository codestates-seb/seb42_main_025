package main_project_025.I6E1.commission.mapper;

import main_project_025.I6E1.commission.dto.CommissionDto;
import main_project_025.I6E1.commission.entity.Commission;
import main_project_025.I6E1.tag.entity.CommissionTag;
import main_project_025.I6E1.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface CommissionMapper {

    @Named("mapTags")
    default List<CommissionTag> mapTags(List<String> tags) {
        List<CommissionTag> commissionTags = new ArrayList<>();
        for (String tagName : tags) {
            commissionTags.add(new CommissionTag(new Tag(tagName)));
        }
        return commissionTags;
    }

    @Mapping(target = "tags", qualifiedByName = "mapTags", source = "tags")//tag test
    Commission commissionPostDtoToCommission(CommissionDto.Post post);
    Commission commissionPatchDtoToCommission(CommissionDto.Patch patch);

    @Mapping(source = "member.name", target = "memberName")
    @Mapping(source = "member.email", target = "memberEmail")
    CommissionDto.Response commissionToResponse(Commission commission);

    List<CommissionDto.Response> commissionToResponses(List<Commission> commissions);
}
