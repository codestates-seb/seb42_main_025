package main_project_025.I6E1.tag.controller;

import lombok.RequiredArgsConstructor;
import main_project_025.I6E1.global.page.PageDto;
import main_project_025.I6E1.tag.dto.TagPostDto;
import main_project_025.I6E1.tag.dto.TagRespondDto;
import main_project_025.I6E1.tag.entity.Tag;
import main_project_025.I6E1.tag.mapper.TagMapper;
import main_project_025.I6E1.tag.service.TagService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tag")
@Validated
@RequiredArgsConstructor
public class TagController {

    private final TagService tagService;
    private final TagMapper tagMapper;

//    @PostMapping
//    public ResponseEntity createTag(@RequestBody TagPostDto tagPostDto) {
//        Tag tag = tagMapper.tagPostDtoToTag(tagPostDto);
//        Tag createdTag = tagService.createTag(tag);
//        TagRespondDto tagRespondDto = tagMapper.tagToTagRespondDto(createdTag);
//        return new ResponseEntity(tagRespondDto, HttpStatus.OK);
//    }

    @GetMapping
    public ResponseEntity readAllTag(Pageable pageable) {
        Page<Tag> tagPage = tagService.readTags(pageable);
        List<Tag> tagList = tagPage.getContent();
        return new ResponseEntity<>(new PageDto<>(tagMapper.tagToRespondDto(tagList), tagPage), HttpStatus.OK);
    }
}
