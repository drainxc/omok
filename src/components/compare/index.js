export function Compare(y, x, board) {
  let point = 0;
  compare(1, 0);
  compare(-1, 0);
  if (point >= 4) {
    alert("흑 승리");
  }
  else {
      point = 0;
  }
  compare(0, 1);
  compare(0, -1);
  if (point >= 4) {
    alert("흑 승리");
  }
  else {
      point = 0;
  }

  function compare(width, height) {
    for (let i = 1; i < 5; i++) {
      if (board[y][x] === board[y + (height * i)][x + (width * i)] && board[y][x] !== 0) {
        point += 1;
        console.log(point);
      } else {
        i = 5;
      }
    }
  }
}
