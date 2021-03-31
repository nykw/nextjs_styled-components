import { FC } from "react";
import styled from "styled-components";

const Thing = styled.div`
  color: blue;
  .somthing {
    border: 1px solid;
    display: block;
  }
`;

const Page: FC = () => (
  <Thing>
    <label htmlFor="foo-button" className="something">
      Mystery button
    </label>
    <button id="foo-button">What do I do?</button>
  </Thing>
);

export default Page;
