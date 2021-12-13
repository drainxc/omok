import React from "react";
import { data } from "../../../lib/export/data";
import * as B from "../board/styles";
import * as R from "../../common/restart/styles";
import { Link } from "react-router-dom";

export default function MainPage() {
  function reload(game) {
    window.location.replace(game);
  }

  const game = ["/singleGame", "/localGame"];
  const gameText = ["혼자 하기", "친구와 함께하기"];

  return (
    <B.MainDiv>
      <B.Side>
        <R.Button>
          {game.map((item, i) => (
            <Link
              to={item}
              style={{ textDecoration: "none" }}
              onClick={() => reload(item)}
            >
              <div className="button">
                <div>{gameText[i]}</div>
              </div>
            </Link>
          ))}
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
