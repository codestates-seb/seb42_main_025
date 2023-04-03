import styled from 'styled-components';

function ImageComponent({ src, alt, imgStyle, width }) {
  return (
    <StyledContainer>
      <StyledImg src={src} alt={alt} imgStyle={imgStyle} width={width} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div.attrs(props => ({
  imgStyle: props.imgStyle,
}))`
  display: flex;
  align-items: center;
  grid-column: ${props => props.column};
  margin: ${props => props.theme.margins[props.margin]};
  aspect-ratio: ${props => props.theme.imgStyles[props.imgStyle]};
  flex: ${props => props.flex};
  height: auto;
  object-fit: cover;
`;

const StyledImg = styled.img.attrs(props => ({
  imgStyle: props.imgStyle,
  width: props.width,
}))`
  display: flex;
  width: ${props => props.theme.imgSizes[props.width]};
  height: auto;
  aspect-ratio: ${props => props.theme.imgStyles[props.imgStyle]};
  object-fit: cover;
  border-radius: 0.5rem;
`;

export default ImageComponent;
