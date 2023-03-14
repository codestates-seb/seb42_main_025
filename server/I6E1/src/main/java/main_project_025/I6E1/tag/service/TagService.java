package main_project_025.I6E1.tag.service;

import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.commission.entity.Commission;
import main_project_025.I6E1.commission.repository.CommissionRepository;
import main_project_025.I6E1.tag.entity.CommissionTag;
import main_project_025.I6E1.tag.entity.Tag;
import main_project_025.I6E1.tag.repository.CommissionTagRepository;
import main_project_025.I6E1.tag.repository.TagRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class TagService {

    private final TagRepository tagRepository;
    private final CommissionRepository commissionRepository;
    private final CommissionTagRepository commissionTagRepository;

    public Commission createTag(Commission commission) {// 결국 commission의 리퀘 바디로 들어오니까 Commission을 써야하나? 코드리뷰 받을것

        List<CommissionTag> commissionTags = new ArrayList<>();
        List<Tag> tags = new ArrayList<>();
        for (CommissionTag tag : commission.getTags()) {
            Tag existingTag = tagRepository.findByTagName(tag.getTag().getTagName());
            if (existingTag != null) {
                tag.setTag(existingTag);//존재하는 태그면 받아와서 저장
            } else {
                tag.setTag(tagRepository.save(new Tag(tag.getTag().getTagName())));//존재하지 않는 테이블이면 생성해서 저장
            }
            tag.setCommission(commission);//커미션 정보 저장
            commissionTags.add(tag);//중간 테이블 저장
            tags.add(tag.getTag());// 태그 테이블에 태그 저장
        }
        commission.setTags(commissionTags);
        commissionTagRepository.saveAll(commissionTags);
        commissionRepository.save(commission);
        return commission;
    }

    public Page<Tag> readTags(Pageable pageable) {//페이지네이션으로 줄지, 리스트로 줄지 대화해볼것
        Pageable pageRequest = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), pageable.getSort());
        return tagRepository.findAll(pageRequest);
    }

    public Tag findTagById(long tagId) {
        Optional<Tag> optionalTag = tagRepository.findById(tagId);
        Tag tag = optionalTag.orElseThrow(() -> new RuntimeException("존재하지 않는 태그입니다."));
        return tag;
    }
}