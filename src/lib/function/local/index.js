import { EverythingCompare } from "../compare";

export function Local(putSound, board, color, e, manage, i, j) {
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
  manage.setPlay(manage.play, (manage.play.game = true)); // 게임 true로 바꾸기
  EverythingCompare(manage, i, j); // 승리 조건
  if (color === 1) {
    e.target.style = "opacity: 1; background-color: black;"; // 흑돌 놓기
    color = 2; // 백돌 준비
    return color;
  } else {
    e.target.style = "opacity: 1; background-color: white;"; // 백돌 놓기
    color = 1; // 흑돌 준비
    return color;
  }
}
