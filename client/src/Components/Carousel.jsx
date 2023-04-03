import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { getCommissionFn } from 'customHook/getCommissionFetch';
import ImageComponent from './ImageComponent';
import Typography from './Typography';
import { useState } from 'react';

function Carousel({ items, changeCarouselImage }) {
  const [img, setImg] = useState(0);
  const settings = {
    dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
    infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
    speed: 300, // 애미메이션의 속도, 단위는 milliseconds
    slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
    slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
    arrows: true,
    pauseOnHover: true,
    beforeChange: (_current, next) => {
      changeCarouselImage(items[next].imageUrl[1]);
      setImg(next);
    },
    // autoplay: true,
    // autoplaySpeed: 3000, //자동으로 슬라이드되게 만들어준다.
  };

  return (
    <Container>
      <Typography
        text={
          (img === 0 && '새로운 커미션') ||
          (img === 1 && '인기 커미션') ||
          (img === 2 && `${items[2].tags[0]} 태그 커미션`)
        }
        size="xxxl"
        color="tea_2"
        bold="bold"
        textShadow=" -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
      />

      <StyledSlider {...settings}>
        {items.map(item => {
          return (
            <ImageContainer key={item.commissionId}>
              <ImageComponent src={item.imageUrl[1]} imgStyle="commission" width="xxxl" />
            </ImageContainer>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

const Container = styled.div`
  max-width: 40rem;
  margin-bottom: 5rem;
`;

const StyledSlider = styled(Slider)`
  margin-top: 1rem;
  .slick-slide {
    display: flex;
    align-items: center;
    max-height: 20rem;
  }

  .slick-prev {
    top: 8.5rem;
    left: -2rem;
    z-index: 2;
  }

  .slick-prev:before {
    font-size: 4rem;
    color: #ce8e5b;
  }

  .slick-next {
    top: 8.5rem;
    right: 0.7rem;
    z-index: 2;
  }

  .slick-next:before {
    font-size: 4rem;
    color: #ce8e5b;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default Carousel;
