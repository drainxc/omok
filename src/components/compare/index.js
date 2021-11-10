export function Compare(y, x, board) {
  let point = 0;
  compare(1, 0, -1, 0);
  compare(0, 1, 0, -1);
  compare(1, 1, -1, -1);
  compare(1, -1, -1, 1);

  function mainCompare(width, height) {
    for (let i = 1; i < 5; i++) {
      if (
        board[y][x] === board[y + height * i][x + width * i] &&
        board[y][x] !== 0
      ) {
        point += 1;
        console.log(point);
      } else {
        i = 5;
      }
      if (point === 4 && board[y][x] === 1) {
        alert("흑 승리!");
      } else if (point === 4 && board[y][x] === 2) {
        alert("백 승리!");
      }
    }
  }

  function compare(y1, x1, y2, x2) {
    mainCompare(y1, x1);
    mainCompare(y2, x2);
    point = 0;
  }
}
