package main_project_025.I6E1.global.page;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@NoArgsConstructor
public class PageDto<T> {
    private List<T> data;
    private PageInfo pageInfo;

    public PageDto(List<T> data, Page page) {
        this.data = data;
        this.pageInfo = new PageInfo(page.getNumber()+1, page.getSize(), page.getTotalPages(), page.getTotalElements());
    }

    @Getter
    @AllArgsConstructor
    private class PageInfo{
        private int pageNumber;
        private int size;
        private int totalPages;
        private long totalElements;

    }
}