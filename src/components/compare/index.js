import React from "react";

let count = 0;

function MainCompare(a, b, c, d, board) {
  if (board[a][b] === board[c][d] && board[a][b] !== 0) {
    count += 1;
    console.log(count);
  }
  if (count === 4) {
    if (board[a][b] === 1) {
      console.log("흑 승리");
    } else {
      console.log("백 승리");
    }
  }
}   

export function Compare(board) {
  for (let x = 0; x <= 14; x++) {
    for (let y = 0; y <= 10; y++) {
      for (let n = 1; n < 5; n++) {
        MainCompare(y, x, y, x + n, board);
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        MainCompare(y, x, y + n, x, board);
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        MainCompare(y, x, y + n, x + n, board);
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        MainCompare(y, x, y + n, x - n, board);
      }
      count = 0;
    }
  }
}
