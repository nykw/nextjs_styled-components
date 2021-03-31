import { FC } from "react";
import styled from "styled-components";

const Wrapper: FC<{ message: string }> = ({ message }) => {
  // WARNING: THIS IS VERY VERY BAD AND SLOW, DO NOT DO THIS!!!
  const StyledWrapper = styled.div`
    /* ... */
  `;

  return <StyledWrapper>{message}</StyledWrapper>;
};

const Page: FC = () => <Wrapper message={"Hello"}></Wrapper>;

export default Page;
