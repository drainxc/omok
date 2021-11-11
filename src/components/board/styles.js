import styled from "styled-components";

export const GameBoard = styled.div`
  width: 660px;
  height: 660px;
  background-color: #c69153;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  th {
    border: 1.5px solid black;
  }
  table {
    width: 90%;
    height: 90%;
    border-collapse: collapse;
    background-color: #c69153;
  }
  .stone {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    margin-left: 24px;
    margin-top: 24px;
    opacity: 0;
  }
  span {
    pointer-events: none;
    font-size: 20px;
  }
  .stone:hover {
    opacity: 40%;
    span {
      opacity: 0;
    }
  }
`;
