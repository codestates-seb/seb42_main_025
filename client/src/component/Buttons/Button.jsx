import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => props.width || 'inherit'};
  padding: ${props => props.padding || '8px 10px'};
  border: ${props => (props.bdColor ? 'solid 1px' : 'none')};
  border-radius: ${props => props.borderRadius || '10px'};
  font-size: ${props => props.fontSize || '16px'};
  font-weight: bold;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
  }
`;

function Button({ text, path = '', handleClick, addStyle = {} }) {
  const navigate = useNavigate();
  const { padding, width, borderRadius, fontSize } = addStyle;

  const goTo = path => {
    navigate(path);
  };

  return (
    <StyledButton
      width={width}
      padding={padding}
      borderRadius={borderRadius}
      fontSize={fontSize}
      onClick={path ? () => goTo(path) : handleClick}
    >
      {text}
    </StyledButton>
  );
}

export default Button;

// 사용 예시

{
  /* <Button
text='Ask Question' // 텍스트 값
path='/questions/ask' // 클릭시 이동하는 경로
addStyle={{
  padding: '11px',  // 값에 ''를 붙여줘야함
  borderRadius: '10px',
  fontSize: '24px'
}}
/> */
}
