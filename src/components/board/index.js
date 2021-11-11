import React, { useCallback, useMemo, useState } from "react";
import * as S from "./styles";
import { Compare } from "../compare";
import { Ai } from "../AI";

export default function Board({ data }) {
  const [board, setBoard] = useState(data);
  const [put, setPut] = useState(false);

  const change = useCallback(
    (i, j, e) => {
      console.log(e.target);
      setPut(!put);
      setBoard(board, (board[i][j] = 1));
      const coordinate = {
        board: board,
        y: i,
        x: j,
      };
      Compare(1, 0, -1, 0, coordinate);
      Compare(0, 1, 0, -1, coordinate);
      Compare(1, 1, -1, -1, coordinate);
      Compare(1, -1, -1, 1, coordinate);
      Ai(coordinate, setBoard);

      e.target.style = "opacity: 1; background-color: black;";
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
