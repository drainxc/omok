import styled from "styled-components";

export const GameBoard = styled.div`
  width: 500px;
  height: 500px;
  background-color: #c69153;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  th {
    border: 1px solid black;
  }
  table {
    width: 450px;
    height: 450px;
    border-collapse: collapse;
    background-color: #c69153;
  }
  .stone {
    border: none;
    width: 20px;
    height: 20px;
    background-color: black;
    color: white;
    border-radius: 50%;
    position: absolute;
    margin-left: 20px;
    margin-top: 20px;
    opacity: 0;
  }
  span {
    pointer-events: none;
  }
  .stone:hover {
    opacity: 40%;
    span {
        opacity: 0;
    }
  }
`;
