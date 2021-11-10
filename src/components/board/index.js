import React, { useCallback, useMemo, useState } from "react";
import * as S from "./styles";
import { Compare } from "../compare";
import { data } from "../../lib/export";

export default function Board() {
  const [board, SetBoard] = useState(data);
  const [put, setPut] = useState(false);

  const change = useCallback(
    (i, j, e) => {
      setPut(!put);
      SetBoard(board, (board[i][j] = 1));
      Compare(i, j, board);
      e.target.style = "opacity: 1;";
    },
    [board, put]
  );

  const boardMemo = useMemo(() => {
    console.log(board);
    return (
      <>
        {board.map((block, i) => (
          <tr>
            {block.map((index, j) => (
              <th>
                <div
                  id={`${i} ${j}`}
                  className="stone"
                  onClick={(e) => change(i, j, e)}
                >
                  <span>{index}</span>
                </div>
              </th>
            ))}
          </tr>
        ))}
      </>
    );
  }, [board, change]);

  return (
    <>
      <S.GameBoard>
        <table>{boardMemo}</table>
      </S.GameBoard>
    </>
  );
}
