/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo, useState } from "react";
import * as S from "./styles";
import { Ai } from "../../../lib/function/AI";
import RestartButton, { Restart } from "../../common/restart";
import putSound from "../../../asset/audio/putSound.mp3";
import { data } from "../../../lib/export/data";
import { EverythingCompare } from "../../../lib/function/compare";
import { Single } from "../../../lib/function/single";

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
        console.log(board);
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
          e.target.style = "opacity: 1;";
          put = false;
          new Audio(putSound).play();
          Single(manage, reset, setBoard, putSound);
          setTimeout(() => {
            put = true;
          }, 1500);
        } else {
          // 친구와 하기 버튼을 눌렀을 때
          new Audio(putSound).play();
          for (let x in board) {
            for (let y in board[0]) {
              if (board[y][x] === 0) {
                if (color === 1) {
                  document.getElementById(`${y} ${x}`).style =
                    "background-color: white";
                } else {
                  document.getElementById(`${y} ${x}`).style =
                    "background-color: black"; // 호버 색상 바꾸기
                }
              }
            }
          }
          if (color === 1) {
            e.target.style = "opacity: 1; background-color: black;"; // 흑돌 놓기
            color = 2; // 백돌 준비
          } else {
            e.target.style = "opacity: 1; background-color: white;"; // 백돌 놓기
            color = 1; // 흑돌 준비
          }
          manage.setPlay(manage.play, (manage.play.game = true)); // 게임 true로 바꾸기
          EverythingCompare(manage, i, j); // 승리 조건
        }
      } else {
        if (i === 0 || i === 14 || j === 14) {
          alert("놓을 수 없는 구역입니다!");
        } else if (put) {
          alert("중복된 자리에는 놓을 수 없습니다!");
        } // 예외 처리
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
