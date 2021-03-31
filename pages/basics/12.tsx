import { FC } from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${({ size }) => size};
  padding: ${({ size }) => size};
`;

const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  border: 2px solid aqua;
`;

const Page = () => (
  <div>
    <Input placeholder="A bigger text input" size="2em" />
    <br />
    <PasswordInput placeholder="A bigger password input" size="2em" />
  </div>
);

export default Page;
