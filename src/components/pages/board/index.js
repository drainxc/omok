/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo, useState } from "react";
import * as S from "./styles";
import RestartButton, { Restart } from "../../common/restart";
import putSound from "../../../asset/audio/putSound.mp3";
import { data } from "../../../lib/export/data";
import { Single } from "../../../lib/function/single";
import { Local } from "../../../lib/function/local";
import { Position } from "../../../lib/function/position";

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

  const change = useCallback(
    (i, j, e) => {
      if (board[i][j] === 0 && i !== 0 && i !== 14 && j !== 14 && put) {
        // 자신이 둘 수 있을 때
        setBoard(board, (board[i][j] = color)); // 배열 넣기
        const manage = {
          board: board,
          setBoard: setBoard,
          play: play,
          setPlay: setPlay,
          y: i,
          x: j,
        };
        if (single) {
          // 혼자 하기 버튼을 눌렀을 때
          put = false;
          Single(manage, putSound, e);
          setTimeout(() => {
            if (reset) {
              Reset(setBoard);
              reset = false;
            } else new Audio(putSound).play();
            put = true;
          }, 1500);
        } else {
          // 친구와 하기 버튼을 눌렀을 때
          color = Local(putSound, color, e, manage);
        }
      } else {
        Position(i, j, put);
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
        <div className="rate" id="black">
          흑 승률 :{" "}
          {play.count
            ? `${Math.floor((play.black / play.count) * 100)}%`
            : "0%"}
        </div>
        <div className="rate" id="white">
          백 승률 :{" "}
          {play.count
            ? `${Math.floor(((play.count - play.black) / play.count) * 100)}%`
            : "0%"}
        </div>
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
