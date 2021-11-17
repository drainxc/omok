import React from "react";
import { data } from "../../../lib/export/data";
import * as B from "../board/styles";
import * as R from "../../common/restart/styles";
import { Link } from "react-router-dom"

export default function MainPage() {
  function reload(game) {
    window.location.replace(game);
  }

  return (
    <B.MainDiv>
      <B.Side>
        <R.Button>
          <Link to="/singleGame" style={{ textDecoration: "none" }} onClick={() => reload("/singleGame")}>
            <div className="button">
              <div>혼자 하기</div>
            </div>
          </Link>
          <Link to="/localGame" style={{ textDecoration: "none" }} onClick={() => reload("/localGame")}>
            <div className="button">
              <div>친구와 하기</div>
            </div>
          </Link>
        </R.Button>
      </B.Side>
      <B.GameBoard>
        <table>
          {data.map((block) => (
            <tr>
              {block.map(() => (
                <th></th>
              ))}
            </tr>
          ))}
        </table>
      </B.GameBoard>
    </B.MainDiv>
  );
}
