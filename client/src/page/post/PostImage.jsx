import { useState } from 'react';
import Food from '../../assets/1.JPG';
import shoes from '../../assets/shoes1.jpg';
import styled from 'styled-components';
import ImageComponent from 'component/ImageComponent';

const PostImage = () => {
  const eat = [
    { id: 1, url: Food },
    { id: 2, url: shoes },
    { id: 3, url: Food },
    { id: 4, url: shoes },
    { id: 5, url: Food },
    { id: 6, url: shoes },
  ];

  const [currItem, setCurrItem] = useState(eat[0]); //선택한 사진 상태설정

  const onView = id => {
    //고유번호인 id를 받아서 해당 사진을 찾아라
    setCurrItem(eat.find(item => item.id === id)); //배열함수중 해당값만 찾아주는 find함수를 쓴다
  };

  return (
    <>
      <Thumbnail src={currItem.url} alt={currItem.url} />
      <ImageBox>
        {eat.map(item => (
          <Button key={item.id} onClick={() => onView(item.id)}>
            <ImageComponent src={item.url} alt={item.title} imgStyle="commission" />
          </Button>
        ))}
      </ImageBox>
    </>
  );
};

const Thumbnail = styled.img`
  width: 100%;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  padding: 0px 3px;
  margin: 6px 0px;
  cursor: pointer;

  &:active {
    background-color: #fff;
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

export default PostImage;
