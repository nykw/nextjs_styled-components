import { deflate } from "node:zlib";
import { FC } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
      transform: rotate(0deg)
  }

  to {
      transform: rotate(360deg)
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Page: FC = () => <Rotate>&lt;💅🏾&gt;</Rotate>;

export default Page;
