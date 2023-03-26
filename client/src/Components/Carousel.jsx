import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({ items, changeCarouselImage }) {
  const settings = {
    dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
    infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
    speed: 300, // 애미메이션의 속도, 단위는 milliseconds
    slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
    slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
    arrows: true,
    // centerMode: true, // 얘가 문제였음..
    pauseOnHover: true,
    beforeChange: (_current, next) => {
      changeCarouselImage(items[next].url);
    },
    // autoplay: true,
    // autoplaySpeed: 1000, //자동으로 슬라이드되게 만들어준다.
  };

  const commissions = [{ id: 'dd', url: 'dd' }];

  console.log(commissions);

  return (
    <Container>
      <StyledSlider {...settings}>
        {commissions.map(item => {
          return (
            <div key={item.id}>
              <ImageContainer>
                <Image src={item.url} />
              </ImageContainer>
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 2rem;
  width: 25rem;
  margin-bottom: 3rem;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    border-radius: 0.25rem;
  }

  .slick-prev {
    top: 8.5rem;
    left: -1.5rem;
    z-index: 2;
  }

  .slick-prev:before {
    font-size: 3rem;
  }

  .slick-next {
    top: 8.5rem;
    right: 0.25rem;
    z-index: 2;
  }

  .slick-next:before {
    font-size: 3rem;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export default Carousel;
