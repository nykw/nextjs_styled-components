import { FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

type Props = {};

const ReversedButton: FC<Props> = (props) => (
  <Button
    {...props}
    children={(props.children as any).split("").reverse()}
  ></Button>
);

const Page: FC = () => (
  <div>
    <Button>Normal Button</Button>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
  </div>
);

export default Page;
