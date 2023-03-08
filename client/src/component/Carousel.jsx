import { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const S_container = styled.div`
  width: 800px;
  height: 350px;
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
  display: flex;
  width: 700px;
  height: 300px;
`;

const imgUrl = require('../assets/shoes1.jpg');

const items = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl },
];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
      infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
      speed: 500, // 애미메이션의 속도, 단위는 milliseconds
      slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
      slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
      arrows: true,
      centerMode: true,
      pauseOnHover: true,
    };

    return (
      <S_container>
        <h2> Single Item</h2>
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
      </S_container>
    );
  }
}
