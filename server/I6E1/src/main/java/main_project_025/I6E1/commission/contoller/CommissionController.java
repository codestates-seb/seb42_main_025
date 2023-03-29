package main_project_025.I6E1.commission.contoller;

import lombok.AllArgsConstructor;
import main_project_025.I6E1.aws.AwsS3Service;
import main_project_025.I6E1.commission.dto.CommissionDto;
import main_project_025.I6E1.commission.entity.Commission;
import main_project_025.I6E1.commission.mapper.CommissionMapper;
import main_project_025.I6E1.commission.repository.CommissionRepository;
import main_project_025.I6E1.commission.service.CommissionService;
import main_project_025.I6E1.global.exception.BusinessException;
import main_project_025.I6E1.global.Page.PageDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/commission")
@Validated
@AllArgsConstructor
public class CommissionController {
    private final CommissionService commissionService;
    private final CommissionMapper mapper;
    private final AwsS3Service awsS3Service;
    private final CommissionRepository commissionRepository;//test



    @PostMapping
    @PreAuthorize("hasRole('ROLE_AUTHOR')")
    public ResponseEntity postCommission(@Valid CommissionDto.Post post, List<MultipartFile> multipartFile){
        Commission commission = commissionService.createCommission(mapper.commissionPostDtoToCommission(post), multipartFile);
        CommissionDto.Response response = mapper.commissionToResponse(commission);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    //READ
    @GetMapping("/{commission-id}")
    public ResponseEntity getCommission(@PathVariable("commission-id")long commissionId) throws BusinessException {
            Commission commission = commissionService.readCommission(commissionId);
            CommissionDto.Response response = mapper.commissionToResponse(commission);
            return new ResponseEntity<>(response, HttpStatus.OK);

    }
    //READ ALL
    //페이지네이션 적용
    @GetMapping
    public ResponseEntity getCommissions(Pageable pageable){
            Page<Commission> commissionPage = commissionService.readCommissions(pageable);
            List<Commission> commissionList = commissionPage.getContent();

            PageDto pageDto = new PageDto<>(mapper.commissionToResponses(commissionList),commissionPage);
            return new ResponseEntity<>(pageDto, HttpStatus.OK);
    }

    //Search
    @GetMapping("/search")
    public ResponseEntity searchCommissions(@RequestParam(required = false) String title,
                                            @RequestParam(required = false) String name,
                                            @RequestParam(required = false) List<String> tags,
                                            Pageable pageable ) {

        Page<Commission> commissionPage = commissionService.searchOptions(pageable, title, name, tags);
        List<Commission> commissionList = commissionPage.getContent();
        PageDto pageDto = new PageDto<>(mapper.commissionToResponses(commissionList),commissionPage);
        return new ResponseEntity<>(pageDto, HttpStatus.OK);
    }

    //UPDATE
    @PatchMapping("/{commission-id}")
    @PreAuthorize("hasRole('ROLE_AUTHOR')")
    public ResponseEntity patchCommission(@PathVariable("commission-id")long commissionId,
                                          @Valid @RequestBody CommissionDto.Patch patch){
            Commission commission = commissionService.updateCommission(commissionId, mapper.commissionPatchDtoToCommission(patch));

            CommissionDto.Response response = mapper.commissionToResponse(commission);
            return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //Delete
    //Soft Delete
    @DeleteMapping("/{commission-id}")
    @PreAuthorize("hasRole('ROLE_AUTHOR')")
    public ResponseEntity deleteCommission(@PathVariable("commission-id")long commissionId){
            commissionService.deleteCommission(commissionId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
