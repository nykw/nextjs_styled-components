import { FC, useState } from "react";
import styled from "styled-components";

const StyledCounter = styled.div`
  /* ... */
  color: red;
`;

const Paragraph = styled.p`
  /* ... */
`;

const Button = styled.button`
  /* ... */
`;

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <StyledCounter>
      <Paragraph>{count}</Paragraph>
      <Button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        -
      </Button>
    </StyledCounter>
  );
};

export default Counter;
