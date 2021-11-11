let point = 0;

export function Compare(y1, x1, y2, x2, coordinate) {
  mainCompare(y1, x1, coordinate.board, coordinate.y, coordinate.x);
  mainCompare(y2, x2, coordinate.board, coordinate.y, coordinate.x);
  const returnValue = point;
  point = 0;
  return returnValue;
}

export function mainCompare(width, height, board, y, x) {
  for (let i = 1; i < 5; i++) {
    if (
      board[y][x] === board[y + height * i][x + width * i] &&
      board[y][x] !== 0
    ) {
      point += 1;
    } else {
      i = 5;
    }
    if (point === 4 && board[y][x] === 1) {
      alert("흑 승리!");
      return;
    } else if (point === 4 && board[y][x] === 2) {
      alert("백 승리!");
      return;
    }
  }
}