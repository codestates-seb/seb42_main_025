import styled from 'styled-components';

function ImageComponent({ src, alt, imgStyle, width }) {
  return (
    <StyledContainer width={width}>
      <StyledImg src={src} alt={alt} imgStyle={imgStyle} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div.attrs(props => ({
  width: props.width,
  margin: props.margin,
  imgStyle: props.imgStyle,
  column: props.column,
  flex: props.flex,
}))`
  display: flex;
  align-items: center;
  grid-column: ${props => props.column};
  max-width: ${props => props.theme.imgSizes[props.width]};
  margin: ${props => props.theme.margins[props.margin]};
  aspect-ratio: ${props => props.theme.imgStyles[props.imgStyle]};
  flex: ${props => props.flex};
  height: auto;
`;

const StyledImg = styled.img.attrs(props => ({
  imgStyle: props.imgStyle,
}))`
  display: flex;
  width: 100%;
  height: auto;
  aspect-ratio: ${props => props.theme.imgStyles[props.imgStyle]};
`;

export default ImageComponent;
