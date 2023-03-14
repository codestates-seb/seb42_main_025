import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgUrl from 'assets/shoes1.jpg';
import Food from 'assets/1.JPG';

const Container = styled.div`
  padding-bottom: 20px;
  width: 800px;
  height: fit-content;
  overflow: hidden;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    outline: none;
  }

  .slick-next {
    right: 0px;
    z-index: 10;
  }

  .slick-prev {
    left: 0px;
    z-index: 10;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  /* height: 600px; */
  object-fit: cover;
`;

const items = [
  { id: 1, url: Food },
  { id: 2, url: imgUrl },
];

function Carousel() {
  const settings = {
    dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
    infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
    speed: 900, // 애미메이션의 속도, 단위는 milliseconds
    slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
    slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
    arrows: true,
    // centerMode: true, // 얘가 문제였음..
    pauseOnHover: true,
    // autoplay: true,
    // autoplaySpeed: 1000, //자동으로 슬라이드되게 만들어준다.
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {items.map(item => {
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

export default Carousel;
