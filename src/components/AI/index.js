export function Ai(board, setBoard, i, j) {
  const y = i + getRandomIntInclusive(-1, 1);
  const x = j + getRandomIntInclusive(-1, 1);
  setBoard(board, (board[y][x] = 2));
  return (document.getElementById(`${y} ${x}`).style =
    "opacity: 1; background-color: white;");
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
