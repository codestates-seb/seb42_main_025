package main_project_025.I6E1.commission.mapper;

import main_project_025.I6E1.commission.dto.CommissionDto;
import main_project_025.I6E1.commission.entity.Commission;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommissionMapper {
    Commission commissionPostDtoToCommission(CommissionDto.Post post);
    Commission commissionPatchDtoToCommission(CommissionDto.Patch patch);

    @Mapping(source = "member.name", target = "memberName")
    @Mapping(source = "member.email", target = "memberEmail")
    CommissionDto.Response commissionToResponse(Commission commission);


    List<CommissionDto.Response> commissionToResponses(List<Commission> commissions);
}
