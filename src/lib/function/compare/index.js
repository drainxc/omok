import { Reset } from "../../../components/pages/board";

export function Compare(y1, x1, y2, x2, manage, y, x) {
  let point = 0;
  let value = 0;

  point += MainCompare(y1, x1, manage.board, y, x, value); // 마지막으로 둔 돌을 기준으로 왼쪽부터 비교
  point += MainCompare(y2, x2, manage.board, y, x, value); // 이후 오른쪽 비교
  if (point === 4) {
    // point가 4이면 승리
    if (manage.board[y][x] === 1 && manage.play.game) {
      alert("🎉흑 돌이 이겼습니다!🎉"); // 흑이 이겼을 때
      manage.setPlay(manage.play, (manage.play.black += 1));
      manage.setPlay(manage.play, (manage.play.count += 1));
    } else if (manage.board[y][x] === 2 && manage.play.game) {
      alert("🎉백 돌이 이겼습니다!🎉"); // 백이 이겼을 때
      manage.setPlay(manage.play, (manage.play.count += 1));
    }
    manage.setPlay(manage.play, (manage.play.game = false));
    Reset(manage.setBoard);
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

export function EverythingCompare(coordinate, y, x) {
  Compare(1, 0, -1, 0, coordinate, y, x);
  Compare(0, 1, 0, -1, coordinate, y, x);
  Compare(1, 1, -1, -1, coordinate, y, x);
  Compare(1, -1, -1, 1, coordinate, y, x); // 가로 세로 대각선 비교
}
