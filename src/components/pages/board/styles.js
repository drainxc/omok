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
    border-radius: 50%;
    position: absolute;
    background-color: black;
    margin-left: 24px;
    margin-top: 24px;
    opacity: 0;
  }
  span {
    pointer-events: none;
    font-size: 20px;
    opacity: 0;
  }
  .stone:hover {
    opacity: 40%;
  }
`;

export const Side = styled.div`
  padding: 15% 5%;
  .rate {
    text-shadow: -2px 0 #593710, 0 2px #593710, 2px 0 #593710, 0 -2px #593710;
    font-weight: 900;
    font-size: 30px;
    margin-left: 40px;
    color: #F3D29E;
  }
`