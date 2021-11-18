import { EverythingCompare } from "../compare";

export function Local(putSound, color, e, manage) {
  new Audio(putSound).play();
  for (let x in manage.board) {
    for (let y in manage.board[0]) {
      if (manage.board[y][x] === 0) {
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
  if (color === 1) {
    e.target.style = "opacity: 1; background-color: black;"; // 흑돌 놓기
    color = 2; // 백돌 준비
    EverythingCompare(manage, manage.y, manage.x); // 승리 조건
    return color;
  } else {
    e.target.style = "opacity: 1; background-color: white;"; // 백돌 놓기
    color = 1; // 흑돌 준비
    EverythingCompare(manage, manage.y, manage.x);
    return color;
  }
}
