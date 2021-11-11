export function Compare(y1, x1, y2, x2, board, y, x) {
  let point = 0;
  let value = 0;
  point += MainCompare(y1, x1, board, y, x, value); // 마지막으로 둔 돌을 기준으로 왼쪽부터 비교
  point += MainCompare(y2, x2, board, y, x, value); // 이후 오른쪽 비교
  if (point === 4 && board[y][x] === 1) {
    // point가 4이면 승리
    alert("흑 승리!"); // 흑이 이겼을 때
  } else if (point === 4 && board[y][x] === 2) {
    alert("백 승리!"); // 백이 이겼을 때
  }
  return point; // point 리턴
}

export function MainCompare(width, height, board, y, x, point) {
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
