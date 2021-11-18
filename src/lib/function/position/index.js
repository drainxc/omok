export function Position(i, j, put) {
  if (i === 0 || i === 14 || j === 14) {
    alert("놓을 수 없는 구역입니다!");
  } else if (put) {
    alert("중복된 자리에는 놓을 수 없습니다!");
  } // 예외 처리
}
