import Board from "./components/Board";
import Title from "./components/Title";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

function App(props) {
  const store = useSelector((state) => state);

  return (
    <Wrapper>
      <Title store={store} />
      <Board store={store} />
    </Wrapper>
  );
}

export default App;
