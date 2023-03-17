package main_project_025.I6E1.commission.contoller;

import lombok.AllArgsConstructor;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.repository.MemberRepository;
import main_project_025.I6E1.commission.dto.CommissionDto;
import main_project_025.I6E1.commission.entity.Commission;
import main_project_025.I6E1.commission.mapper.CommissionMapper;
import main_project_025.I6E1.commission.service.CommissionService;
import main_project_025.I6E1.global.Page.PageDto;
import main_project_025.I6E1.global.exception.BusinessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/v1/commission")
@Validated
@AllArgsConstructor
public class CommissionController {
    private final CommissionService commissionService;
    private final CommissionMapper mapper;

    //CREATE
    @PostMapping
    public ResponseEntity postCommission(@Valid @RequestBody CommissionDto.Post post){
        Commission commission = commissionService.createCommission(mapper.commissionPostDtoToCommission(post));

        CommissionDto.Response response = mapper.commissionToResponse(commission);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    //READ
    @GetMapping("/{commission-id}")
    public ResponseEntity getCommission(@PathVariable("commission-id")long commissionId) throws BusinessException {

        try {
            Commission commission = commissionService.readCommission(commissionId);
            CommissionDto.Response response = mapper.commissionToResponse(commission);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (BusinessException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }
    //READ ALL
    //페이지네이션 적용
    @GetMapping
    public ResponseEntity getCommissions(Pageable pageable){
        try {
            Page<Commission> commissionPage = commissionService.readCommissions(pageable);
            List<Commission> commissionList = commissionPage.getContent();

            PageDto pageDto = new PageDto<>(mapper.commissionToResponses(commissionList),commissionPage);
            return new ResponseEntity<>(pageDto, HttpStatus.OK);

        }catch (BusinessException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }

    //UPDATE
    @PatchMapping("/{commission-id}")
    public ResponseEntity patchCommission(@PathVariable("commission-id")long commissionId,
                                          @Valid @RequestBody CommissionDto.Patch patch) throws BusinessException{
        try {
            Commission commission = commissionService.updateCommission(commissionId, mapper.commissionPatchDtoToCommission(patch));

            CommissionDto.Response response = mapper.commissionToResponse(commission);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (BusinessException e){
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    //Delete
    //Soft Delete
    @DeleteMapping("/{commission-id}")
    public ResponseEntity deleteCommission(@PathVariable("commission-id")long commissionId)throws BusinessException{
        try {
            commissionService.deleteCommission(commissionId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (BusinessException e){
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    private final MemberRepository memberRepository;
    // TEST
    @PostMapping("/{testId}")
    public ResponseEntity memberTest(@PathVariable long testId){
        Member member = new Member();
        member.setMemberId(testId);
        memberRepository.save(member);

        return new ResponseEntity(HttpStatus.OK);
    }

}
