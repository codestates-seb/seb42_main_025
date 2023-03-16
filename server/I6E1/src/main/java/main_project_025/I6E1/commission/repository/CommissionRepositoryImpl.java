package main_project_025.I6E1.commission.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import main_project_025.I6E1.commission.dto.CommissionDto;
import main_project_025.I6E1.commission.entity.Commission;
import main_project_025.I6E1.commission.entity.QCommission;
import main_project_025.I6E1.tag.entity.CommissionTag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.stream.Collectors;

public class CommissionRepositoryImpl extends QuerydslRepositorySupport implements CommissionRepositoryCustom {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    public CommissionRepositoryImpl() {
        super(Commission.class);
    }

public Page<Commission> findBySearchOption(Pageable pageable, String title, String name, List<String> tags) {
    QCommission commission = QCommission.commission;
    BooleanBuilder builder = new BooleanBuilder();

    if (!ObjectUtils.isEmpty(title)) {
        builder.and(commission.title.containsIgnoreCase(title));
    }

    if (!ObjectUtils.isEmpty(name)) {
        builder.and(commission.member.name.containsIgnoreCase(name));
    }

    if (tags != null && !tags.isEmpty()) {
        for (String tag : tags) {
            builder.and(commission.tags.any().tagName.eq(tag));
        }
    }

    JPQLQuery<Commission> query = jpaQueryFactory.selectFrom(commission)
            .where(builder);

    List<Commission> commissions = getQuerydsl().applyPagination(pageable, query).fetch();

    return new PageImpl<Commission>(commissions, pageable, query.fetchCount());
}
}