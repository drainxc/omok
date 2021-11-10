import React, { useCallback, useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import { compare } from "../compare";
import { data } from "../../lib/export";

export default function Board() {
  const [board, SetBoard] = useState(data);

  const [put, setPut] = useState(false);
  const change = useCallback(()=> {
    console.log(1);
  setPut(!put);
  SetBoard(board, (board[1][4] = 1));
},[board, put])

  const boardMemo = useMemo(()=>{
      console.log(board);
    return(<>{ 
      board.map((boardN,i) => (
    <tr>
      {boardN.map((index,j) => (
        <th>
            <button id ={`${i} ${j}`} onClick={change}>{index}</button>
        </th>
      ))}
    </tr>
  ))}</>)},[board, change]);



  return (
    <>
      <S.Table>{boardMemo}</S.Table>
    </>
  );
}
