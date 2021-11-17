/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo, useState } from "react";
import * as S from "./styles";
import { Ai } from "../../../lib/function/AI";
import RestartButton, { Restart } from "../../common/restart";
import putSound from "../../../asset/audio/putSound.mp3";
import { data } from "../../../lib/export/data";

let reset = false;

export default function Board({ single }) {
  const [board, setBoard] = useState(data);
  const [play, setPlay] = useState({
    count: 0,
    black: 0,
    game: true,
  });
  let color = 1;
  let put = true;
  let black = true;

  const change = useCallback(
    (i, j, e) => {
      if (board[i][j] === 0 && i !== 0 && i !== 14 && j !== 14 && put) {
        // 자신이 둘 수 있을 때
        console.log(board);
        setBoard(board, (board[i][j] = color)); // 배열 넣기
        if (single) {
          e.target.style = "opacity: 1;";
          // eslint-disable-next-line react-hooks/exhaustive-deps
          put = false;
          new Audio(putSound).play();
          const manage = {
            board: board,
            setBoard: setBoard,
            play: play,
            setPlay: setPlay,
            y: i,
            x: j,
          };
          setTimeout(() => {
            // 0.3초 후에 AI 돌 놓기
            Ai(manage);
            if (reset) {
              Reset(setBoard);
              reset = false;
            } else {
              new Audio(putSound).play();
            }
            put = !put;
          }, 1500); // AI 돌 놓기
        } else {
          if (black) {
            e.target.style = "opacity: 1; background-color: black;";
            color = 2;
          } else {
            e.target.style = "opacity: 1; background-color: white;";
            color = 1;
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
          black = !black;
        }
      } else {
        if (i === 0 || i === 14 || j === 14) {
          alert("놓을 수 없는 구역입니다!");
        } else if (put) {
          alert("중복된 자리에는 놓을 수 없습니다!");
        }
      }
    },
    [board, play]
  );

  const GameBoard = useMemo(() => {
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
    <S.MainDiv>
      <S.Side>
        {play.count ? (
          <div className="rate">
            승률 : {Math.floor((play.black / play.count) * 100)}%
          </div>
        ) : (
          <div className="rate">승률 0%</div>
        )}
        <RestartButton setBoard={setBoard} />
      </S.Side>
      <S.GameBoard>
        <table>{GameBoard}</table>
      </S.GameBoard>
    </S.MainDiv>
  );
}

export function Reset(setBoard) {
  Restart(setBoard);
  reset = true;
}
