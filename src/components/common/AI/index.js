import { Compare, MainCompare } from "../compare";

export function Ai(coordinate, setBoard) {
  let y, x; // 좌표 선언
  const drawStyle = "opacity: 1; background-color: white;"; // 색 및 투명도
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
        // 빈 배열일 때
        setBoard(coordinate.board, (coordinate.board[y][x] = 2)); // 배열 넣기
        return (document.getElementById(`${y} ${x}`).style = drawStyle); // 돌 그리기
      }
    }
  } else {
    for (let i = 3; i > 0; i--) {
      if (Compare(1, 0, -1, 0, coordinate) >= i) {
        // 가로로 공격을 받았을 때
        defence(1, 0, -1, 0);
        return (document.getElementById(`${y} ${x}`).style = drawStyle);
      } else if (Compare(0, 1, 0, -1, coordinate) >= i) {
        // 세로로 공격을 받았을 때
        defence(0, 1, 0, -1);
        return (document.getElementById(`${y} ${x}`).style = drawStyle);
      } else if (Compare(1, 1, -1, -1, coordinate) >= i) {
        // 대각선으로 공격을 받았을 때
        defence(1, 1, -1, -1);
        return (document.getElementById(`${y} ${x}`).style = drawStyle);
      } else if (Compare(1, -1, -1, 1, coordinate) >= i) {
        // 대각선(반대)으로 공격을 받았을 떄
        defence(1, -1, -1, 1);
        return (document.getElementById(`${y} ${x}`).style = drawStyle);
      }
    }

    function defence(x1, y1, x2, y2) {
      const randomNumber = getRandomIntInclusive(0, 1);
      let tmp;
      if (randomNumber) {
        tmp = x1;
        x1 = x2;
        x2 = tmp;
        tmp = y1;
        y1 = y2;
        y2 = tmp;
      } // 랜덤으로 값 변경
      y = // y좌표
        coordinate.y +
        y1 *
          (MainCompare(
            x1,
            y1,
            coordinate.board,
            coordinate.y,
            coordinate.x,
            0
          ) +
            1);
      x = // x좌표
        coordinate.x +
        x1 *
          (MainCompare(
            x1,
            y1,
            coordinate.board,
            coordinate.y,
            coordinate.x,
            0
          ) +
            1); // 공격을 받았을 때 수비
      if (coordinate.board[y][x] === 0) {
        // 좌표가 빈 배열이라면 수비하고 리턴
        setBoard(coordinate.board, (coordinate.board[y][x] = 2));
        // eslint-disable-next-line no-sequences
        return y, x;
      } else {
        // 좌표가 빈 배열이 아니라면 반대쪽을 수비하고 리턴
        y = // x좌표 반대쪽
          coordinate.y +
          y2 *
            (MainCompare(
              x2,
              y2,
              coordinate.board,
              coordinate.y,
              coordinate.x,
              0
            ) +
              1);
        x = // y좌표 반대쪽
          coordinate.x +
          x2 *
            (MainCompare(
              x2,
              y2,
              coordinate.board,
              coordinate.y,
              coordinate.x,
              0
            ) +
              1);
        setBoard(coordinate.board, (coordinate.board[y][x] = 2));
        // eslint-disable-next-line no-sequences
        return y, x;
      }
    }
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} // 랜덤 함수
