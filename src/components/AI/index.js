import { Compare, MainCompare } from "../compare";

export function Ai(coordinate, setBoard) {
  let y, x; // 좌표 선언
  if (
    Compare(1, 0, -1, 0, coordinate) === 0 &&
    Compare(0, 1, 0, -1, coordinate) === 0 &&
    Compare(1, 1, -1, -1, coordinate) === 0 &&
    Compare(1, -1, -1, 1, coordinate) === 0
  ) {
    // 흑돌 주변에 아무 것도 없을 때
    while (1) {
      y = coordinate.y + getRandomIntInclusive(-1, 1);
      x = coordinate.x + getRandomIntInclusive(-1, 1); // 랜덤
      if (coordinate.board[y][x] === 0) {
        setBoard(coordinate.board, (coordinate.board[y][x] = 2)); // 배열 넣기
        return (document.getElementById(`${y} ${x}`).style =
          "opacity: 1; background-color: white;"); // 돌 그리기
      }
    }
  } else if (Compare(1, 0, -1, 0, coordinate) >= 1) {
    // 흑돌이 가로로 공격했을 때
    y = coordinate.y;
    x =
      coordinate.x +
      MainCompare(1, 0, coordinate.board, coordinate.y, coordinate.x) +
      1; // 흑돌이 가로로 공격했을 때 오른쪽 마지막 칸 좌표 지정
    if (coordinate.board[y][x] === 0) {
      // 좌표가 빈 배열일 때
      setBoard(coordinate.board, (coordinate.board[y][x] = 2));
      return (document.getElementById(`${y} ${x}`).style =
        "opacity: 1; background-color: white;");
    } else {
      // 좌표가 빈 배열이 아니라면 왼쪽 마지막 칸 좌표 지정
      y = coordinate.y;
      x =
        coordinate.x - 1;
      setBoard(coordinate.board, (coordinate.board[y][x] = 2));
      return (document.getElementById(`${y} ${x}`).style =
        "opacity: 1; background-color: white;");
    }
  } else if (Compare(0, 1, 0, -1, coordinate) >= 1) {
    y =
      coordinate.y +
      (MainCompare(0, 1, coordinate.board, coordinate.y, coordinate.x) + 1);
    x = coordinate.x;
    if (coordinate.board[y][x] === 0) {
      setBoard(coordinate.board, (coordinate.board[y][x] = 2));
      return (document.getElementById(`${y} ${x}`).style =
        "opacity: 1; background-color: white;");
    } else {
      y = coordinate.y - 1;
      x = coordinate.x;
      setBoard(coordinate.board, (coordinate.board[y][x] = 2));
      return (document.getElementById(`${y} ${x}`).style =
        "opacity: 1; background-color: white;");
    }
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} // 랜덤 함수
