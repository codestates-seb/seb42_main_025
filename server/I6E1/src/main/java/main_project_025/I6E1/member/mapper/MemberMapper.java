package main_project_025.I6E1.member.mapper;

import main_project_025.I6E1.member.dto.MemberDto;
import main_project_025.I6E1.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {

    Member memberPostToMember(MemberDto.Post memberPostDto);

    MemberDto.MemberDetailResponse memberToMemberDetailResponse(Member member);
}
