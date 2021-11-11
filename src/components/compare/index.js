let point = 0;

export function Compare(y1, x1, y2, x2, coordinate) {
  let returnValue = 0;
  returnValue += MainCompare(
    y1,
    x1,
    coordinate.board,
    coordinate.y,
    coordinate.x
  );
  returnValue += MainCompare(
    y2,
    x2,
    coordinate.board,
    coordinate.y,
    coordinate.x
  );
  
  Victory(coordinate);
  point = 0;
  return returnValue; // point 리턴
}

export function MainCompare(width, height, board, y, x) {
  for (let i = 1; i < 5; i++) {
    if (
      board[y][x] === board[y + height * i][x + width * i] &&
      board[y][x] !== 0
    ) {
      // 돌이 이어져 있는 지 비교
      point += 1; // 이어져 있다면 point 1 증가
    } else {
      i = 5;
    }
  }
  return point; // point 리턴
}

export function Victory(coordinate) {
  if (point === 4 && coordinate.board[coordinate.y][coordinate.x] === 1) {
    // point가 4이면 승리
    alert("흑 승리!"); // 흑이 이겼을 때
    return;
  } else if (point === 4 && coordinate.board[coordinate.y][coordinate.x] === 2) {
    alert("백 승리!"); // 백이 이겼을 때
    return;
  }
  else {
    point = 0;
  }
}
