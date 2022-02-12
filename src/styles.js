import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1100px){
        flex-direction: column-reverse;
        justify-content: initial;
        overflow: auto;
      }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 30px;
  background: rgb(229 231 235);
  border-radius: 10px;
  padding: 20px;
`;
