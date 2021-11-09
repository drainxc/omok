import React from "react";
import * as S from "./styles";
import { board } from "../../lib/export/index";

export default function Board() {
  console.log(board);
  let count = 0;
  for (let x = 0; x < 15; x++) {
    for (let y = 0; y <= 10; y++) {
      for (let n = 1; n < 5; n++) {
        if (board[y][x] === board[y][x + n] && board[y][x] === 1) {
          count += 1;
        }
        if (count === 4) {
          console.log("asdf");
        }
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        if (board[y][x] === board[y + n][x] && board[y][x] === 1) {
          count += 1;
        }
        if (count === 4) {
          console.log("asdf");
        }
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        if (board[y][x] === board[y + n][x + n] && board[y][x] === 1) {
          count += 1;
        }
        if (count === 4) {
          console.log("asdf");
        }
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        if (board[y][x] === board[y + n][x - n] && board[y][x] === 1) {
          count += 1;
        }
        if (count === 4) {
          console.log("asdf");
        }
      }
      count = 0;
    }
  }
  return (
    <>
      <S.Table></S.Table>
    </>
  );
}
