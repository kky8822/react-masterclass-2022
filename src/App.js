import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 100px;
  color: ${(props) => props.theme.textColor};
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 200px;
  width: 200px;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 200px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😃Hi</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
