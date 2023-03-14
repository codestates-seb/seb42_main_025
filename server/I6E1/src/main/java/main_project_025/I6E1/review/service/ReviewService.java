package main_project_025.I6E1.review.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main_project_025.I6E1.Member.entity.Member;
import main_project_025.I6E1.Member.repository.MemberRepository;
import main_project_025.I6E1.Member.service.MemberService;
import main_project_025.I6E1.commission.entity.Commission;
import main_project_025.I6E1.commission.repository.CommissionRepository;
import main_project_025.I6E1.global.exception.BusinessException;
import main_project_025.I6E1.global.exception.ExceptionCode;
import main_project_025.I6E1.review.entity.Review;
import main_project_025.I6E1.review.repository.ReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class ReviewService {
    private ReviewRepository reviewRepository;
    private MemberRepository memberRepository;
    private CommissionRepository commissionRepository;
    private MemberService memberService;

    //CREATE
    public Review createReview(Review review){
        //존재하는 커미션인지 검증
        existCommission(review.getCommissionId());
        //멤버 미구현
        Member member = getMemberFromId(1l);
        review.setMember(member);
        return reviewRepository.save(review);
    }

    private Member getMemberFromId(long memberId){
        return memberRepository.findById(memberId).get();
    }

    // READ
    public Review readReview(long reviewId){
        return existReview(reviewId);
    }

    // READ ALL
    public Page<Review> readReviews(Pageable pageable){
        Pageable pageRequest = PageRequest.of(pageable.getPageNumber()-1, pageable.getPageSize(), pageable.getSort());
        return reviewRepository.findAll(pageRequest);
    }
    //UPDATE
    public Review updateReview(long reviewId, Review review){
        Review verifyReview = verifyWriter(reviewId);

        verifyReview.setContent(review.getContent());

        return reviewRepository.save(verifyReview);
    }

    //DELETE
    public void deleteReview(long reviewId){
        reviewRepository.deleteById(reviewId);
    }

    // 커미션 검증
    private Commission existCommission(long commissionId){
        Optional<Commission> commission = commissionRepository.findById(commissionId);
        return commission.orElseThrow(()-> new BusinessException(ExceptionCode.COMMISSION_NOT_FOUND));
    }

    // 리뷰 검증
    private Review existReview(long reviewId){
        Optional<Review> review = reviewRepository.findById(reviewId);
        return review.orElseThrow(()-> new BusinessException(ExceptionCode.REVIEW_NOT_FOUND));
    }

    // (로그인 멤버 = 작성자) 검증
    private Review verifyWriter(long reviewId){
        //멤버 미구현
        //long memberId = memberService.getLoginMember().getMemberId();
        long memberId = 1; /*  Test  */
        Review review = existReview(reviewId);
        if (/*  Test  */ 1 != memberId){
            throw new BusinessException(ExceptionCode.NOT_AUTHORITY);
        }
        return review;
    }
}

