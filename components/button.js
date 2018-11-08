import styled, { css } from "styled-components";

export const Button = styled.a`
  border: 2px solid #7e7e7e;
  background: white;
  text-align: center;
  font-size: 20px;
  margin: 15px;
  display: block;
  width: 250px;
  padding: 15px 0 15px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  &:hover {
    background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
    color: white;
    transition: 0.3s;
  }
  ${props =>
    props.primary &&
    css`
      background: #7e7e7e;
      color: white;
      &:hover {
        background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
        transition: 0.3s;
      }
    `};

  border-radius: 50px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
`;
