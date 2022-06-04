import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  background-color: tomato;
  color: white;
  border-radius: 15px;
  height: 20px;
  border: 0;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Box bgColor="tomato" />
      <Circle bgColor="teal" />
      <Btn>Hello</Btn>
      <Btn as="a" href="/">
        Hello link
      </Btn>

      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
