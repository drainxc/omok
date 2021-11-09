import React from "react";
import * as S from "./styles";
import { board } from "../../lib/export/index";

export default function Board() {
  function compare(a, b, c, d) {
    if (board[a][b] === board[c][d] && board[a][b] === 1) {
      count += 1;
    }
    if (count === 4) {
      console.log("asdf");
    }
  }
  console.log(board);
  let count = 0;
  for (let x = 0; x < 15; x++) {
    for (let y = 0; y <= 10; y++) {
      for (let n = 1; n < 5; n++) {
        compare(y, x, y, x + n);
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        compare(y, x, y + n, x);
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        compare(y, x, y + n, x + n);
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        compare(y, x, y + n, x - n);
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
