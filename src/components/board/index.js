import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import { compare } from "../compare";
import { data } from "../../lib/export";

export default function Board() {
  const [board, SetBoard] = useState(data);
  const [playBoard, SetPlayBoard] = useState()
  useMemo(() => {
      console.log('asdf');
    SetPlayBoard(board.map((_,i)=>(<tr>{board[i].map((index)=>(<th>{index}</th>))}</tr>)));
  }, [board]);

  return (
    <>
      <S.Table>
        {playBoard}
      </S.Table>
    </>
  );
}
