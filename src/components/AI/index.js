import { Compare, MainCompare } from "../compare";

export function Ai(coordinate, setBoard) {
    let y, x;
    if (
      Compare(1, 0, -1, 0, coordinate) === 0 &&
      Compare(0, 1, 0, -1, coordinate) === 0 &&
      Compare(1, 1, -1, -1, coordinate) === 0 &&
      Compare(1, -1, -1, 1, coordinate) === 0
    ) {
      while (1) {
        y = coordinate.y + getRandomIntInclusive(-1, 1);
        x = coordinate.x + getRandomIntInclusive(-1, 1);
        if (coordinate.board[y][x] === 0) {
          setBoard(coordinate.board, (coordinate.board[y][x] = 2));
          return (document.getElementById(`${y} ${x}`).style =
            "opacity: 1; background-color: white;");
        }
      }
    }
    if (Compare(1, 0, -1, 0, coordinate) >= 1) {
      y = coordinate.y;
      x =
        coordinate.x +
        MainCompare(1, 0, coordinate.board, coordinate.y, coordinate.x) +
        1;
      if (coordinate.board[y][x] === 0) {
        setBoard(coordinate.board, (coordinate.board[y][x] = 2));
        return (document.getElementById(`${y} ${x}`).style =
          "opacity: 1; background-color: white;");
      } else {
        y = coordinate.y;
        x =
          coordinate.x -
          (MainCompare(-1, 0, coordinate.board, coordinate.y, coordinate.x) -
          1);
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
}
