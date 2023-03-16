package main_project_025.I6E1.commission.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import main_project_025.I6E1.commission.entity.Commission;
import main_project_025.I6E1.commission.entity.QCommission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

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

//    @Override
//    public Page<Commission> findBySearchOption(Pageable pageable, String title, String name, List<String> tags) {
//        JPQLQuery<Commission> query = jpaQueryFactory.selectFrom(QCommission.commission)
//                .where(containTitle(title), containName(name), containTags(tags));
//
//        List<Commission> commissions = this.getQuerydsl().applyPagination(pageable, query).fetch();
//        return new PageImpl<Commission>(commissions, pageable, query.fetchCount());
//    }
//
//    private BooleanExpression containTitle(String title) {
//        if (title == null || title.isEmpty()) {
//            return null;
//        }
//        return QCommission.commission.title.containsIgnoreCase(title);//대소문자 구별 X
//    }
//
//    private BooleanExpression containName(String name) {
//        if (name == null || name.isEmpty()) {
//            return null;
//        }
//        return QCommission.commission.member.name.containsIgnoreCase(name);//동일한 문자열만 뽑을지, 포함하는 문자열 다 뽑을지 의논 필요
//    }
//
////    private BooleanExpression containTags(List<String> tags) {
////        if (tags == null || tags.isEmpty()) {
////            return null;
////        }
////        QCommission commission = QCommission.commission;
////        List<BooleanExpression> tagExpressions = new ArrayList<>();
////        for (String tag : tags) {
////            tagExpressions.add(commission.tags.any().tagName.eq(tag));
////        }
////        return Expressions.allOf((BooleanExpression) tagExpressions);
////    }
//
//    private BooleanExpression containTags(List<String> tags) {
//        if (tags == null || tags.isEmpty()) {
//            return null;
//        }
//
//        QCommission commission = QCommission.commission;
//        BooleanBuilder builder = new BooleanBuilder();
//
//        for (String tag : tags) {
//            builder.or(commission.tags.any().tagName.eq(tag));
//        }
//
//        return builder.getValue();
//    }
