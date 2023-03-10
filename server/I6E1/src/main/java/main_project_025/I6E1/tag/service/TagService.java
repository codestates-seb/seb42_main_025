package main_project_025.I6E1.tag.service;

import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.tag.entity.Tag;
import main_project_025.I6E1.tag.repository.TagRepository;
import main_project_025.I6E1.trade.entity.Trade;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class TagService {

    private final TagRepository tagRepository;

    public Tag createTag(Tag tag) {
        //유저 검증

        return tagRepository.save(tag);
    }

//    public void deleteTag(long tagId) { 삭제,수정 기능에 대해선 얘기해볼것
//        //유저검증
//        findTagById(tagId);
//        tagRepository.deleteById(tagId);
//    }

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
