import React from "react";
import { data } from "../../lib/export";

export function compare(a, b, c, d) {
    if (data[a][b] === data[c][d] && data[a][b] !== 0) {
      count += 1;
    }
    if (count === 4) {
      if (data[a][b] === 1) {
          console.log("흑 승리");
      }
      else {
          console.log("백 승리");
      }
    }
  }
  console.log(data);
  let count = 0;
  for (let x = 0; x <= 10; x++) {
    for (let y = 0; y <= 10; y++) {
      for (let n = 1; n < 5; n++) {
        compare(y, x, y, x + n);
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        compare(y, x, y + n, x);
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        compare(y, x, y + n, x + n);
      }
      count = 0;
      for (let n = 1; n < 5; n++) {
        compare(y, x, y + n, x - n);
      }
      count = 0;
    }
  }