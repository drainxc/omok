import styled from "styled-components";

export const GameBoard = styled.div`
  width: 500px;
  height: 500px;
  background-color: #c69153;
  display: flex;
  justify-content: center;
  align-items: center;
  th {
    border: 1px solid black;
  }
  table {
    width: 450px;
    height: 450px;
    border-collapse: collapse;
    background-color: #c69153;
  }
  button {
    border: none;
    background-color: white;
    border-radius: 26px;
    position: absolute;
    margin-left: 5px;
    margin-top: 5px;
  }
`;
