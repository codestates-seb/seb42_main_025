package main_project_025.I6E1.commission.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.repository.MemberRepository;
import main_project_025.I6E1.Member.service.MemberService;
import main_project_025.I6E1.auth.userdetails.AuthMember;
import main_project_025.I6E1.commission.dto.CommissionDto;
import main_project_025.I6E1.commission.entity.Commission;
import main_project_025.I6E1.commission.repository.CommissionRepository;
import main_project_025.I6E1.global.exception.BusinessException;
import main_project_025.I6E1.global.exception.ExceptionCode;
import main_project_025.I6E1.tag.service.TagService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class CommissionService {
    private CommissionRepository commissionRepository;
    private MemberRepository memberRepository;
    private TagService tagService;//tag test
//    private CommissionRepositoryImpl commissionRepositoryImpl;

    //CREATE
    public Commission createCommission(Commission commission){
        //
        AuthMember loginMember = (AuthMember) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long memberId = loginMember.getMemberId();

        Member verifyMember = getMemberFromId(memberId);

        commission.setMember(verifyMember);
        tagService.createTag(commission);
        return commissionRepository.save(commission);
    }


    // READ
    public Commission readCommission(long commissionId){
        return existCommission(commissionId);
    }

    // READ ALL
    public Page<Commission> readCommissions(Pageable pageable){
        Pageable pageRequest = PageRequest.of(pageable.getPageNumber()-1, pageable.getPageSize(), pageable.getSort());
        return commissionRepository.findAll(pageRequest);
    }

    //검색 기능
//    public Page<Commission> searchOptions(Pageable pageable, String title, String name, List<String> tags) {
//        Pageable pageRequest = PageRequest.of(pageable.getPageNumber()-1, pageable.getPageSize(), pageable.getSort());
//        return commissionRepositoryImpl.findBySearchOption(pageRequest, title, name, tags);
//    }

    // UPDATE
    public Commission updateCommission(long commissionId, Commission commission){
        Commission verifyCommission = verifyWriter(commissionId);

        verifyCommission.setTitle(commission.getTitle());
        verifyCommission.setContent(commission.getContent());

        return commissionRepository.save(verifyCommission);
    }

    //DELETE
    public void deleteCommission(long commissionId){
        commissionRepository.deleteById(commissionId);
    }

    // 게시글 검증
    private Commission existCommission(long commissionId){
        Optional<Commission> commission = commissionRepository.findById(commissionId);
        return commission.orElseThrow(()-> new BusinessException(ExceptionCode.COMMISSION_NOT_FOUND));
    }

    // (로그인 멤버 = 작성자) 검증
    private Commission verifyWriter(long commissionId){
        AuthMember loginMember = (AuthMember) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long memberId = loginMember.getMemberId();

        Commission commission = existCommission(commissionId);
        if ( commission.getMember().getMemberId()  != memberId  ){
            throw new BusinessException(ExceptionCode.NOT_AUTHORITY);
        }
        return commission;
    }

    private Member getMemberFromId(long memberId){
        return memberRepository.findById(memberId).get();
    }
}
