import React, { useCallback, useMemo, useState } from "react";
import * as S from "./styles";
import { EverythingCompare } from "../../common/compare";
import { Ai } from "../../common/AI";
import RestartButton, { Restart } from "../../common/restart";

export default function Board({ data }) {
  const [board, setBoard] = useState(data);
  const [put, setPut] = useState(false);

  const change = useCallback(
    (i, j, e) => {
      setPut(!put); // 자신이 둘 수 있을 때
      if (board[i][j] === 0 && i !== 0 && i !== 14 && j !== 14) {
        setBoard(board, (board[i][j] = 1)); // 배열 넣기
        const coordinate = {
          board: board,
          y: i,
          x: j,
        };
        EverythingCompare(board, i, j, setBoard);
        setTimeout(() => {
          // 0.3초 후에 AI 돌 놓기
          Ai(coordinate, setBoard);
        }, 300); // AI 돌 놓기
        e.target.style = "opacity: 1;";
      } else {
        if (i === 0 || i === 14 || j === 14) {
          alert("놓을 수 없는 구역입니다!");
        } else {
          alert("중복된 자리에는 놓을 수 없습니다!");
        }
      }
    },
    [board, put]
  );

  const GameBoard = useMemo(() => {
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
      <S.Button>
        <RestartButton setBoard={setBoard} />
      </S.Button>
      <S.GameBoard>
        <table>{GameBoard}</table>
      </S.GameBoard>
    </>
  );
}

export function Again(setBoard) {
  Restart(setBoard);
}
