export function Compare(y, x, board) {
  let point = 0;
  mainCompare(1, 0);
  mainCompare(-1, 0);
  point = 0;
  mainCompare(0, 1);
  mainCompare(0, -1);
  point = 0;
  mainCompare(1, 1);
  mainCompare(-1, -1);
  point = 0;
  mainCompare(1, -1);
  mainCompare(-1, 1);
  point = 0;

  function mainCompare(width, height) {
    for (let i = 1; i < 5; i++) {
      if (
        board[y][x] === board[y + height * i][x + width * i] &&
        board[y][x] !== 0
      ) {
        point += 1;
        console.log(point);
      } else {
        i = 5;
      }
      if (point === 4 && board[y][x] == 1) {
        alert("흑 승리!");
      }
      else if (point === 4 && board[y][x] == 2) {
          alert("백 승리!");
      }
    }
  }
}
