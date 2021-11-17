import React from "react";
import { data } from "../../../lib/export/data";
import * as B from "../board/styles";
import * as R from "../../common/restart/styles";

export default function MainPage() {
  return (
    <B.MainDiv>
      <B.Side>
        <R.Button>
            <div className="button">
              <div>혼자하기</div>
            </div>
            <div className="button">
              <div>친구와 하기</div>
            </div>
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
