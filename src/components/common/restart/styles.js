import styled from "styled-components";

export const RestartDiv = styled.div`
  .button {
    background: url("http://1.bp.blogspot.com/-tXavBQFjNFQ/VMSaYaq7PtI/AAAAAAAADSc/awMPRe3yu5A/s1600/wood_pattern.png");
    width: 300px;
    height: 75px;
    position: relative;
    border: none;
    display: inline-block;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),
      inset 0px -7px 0px 0px rgba(0, 0, 0, 0.3),
      inset 0px 3px 0px 0px rgba(255, 255, 255, 0.5);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 7px;
    overflow: hidden;
    cursor: pointer;
    margin: 36px;
    display: flex;
    justify-content: center;
  }
  .button > div {
    padding: 10px 20px 12px 20px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
    font-size: 40px;
    background: linear-gradient(to top, #996627, #593710);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .button:active {
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),
      inset 0px -2px 0px 0px rgba(0, 0, 0, 0.3),
      inset 0px 2px 0px 0px rgba(255, 255, 255, 0.5);
    top: 3px;
  }
`;
