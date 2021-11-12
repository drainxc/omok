import React, { useState } from "react";
import Board from "../board";
import * as S from "./styles";
import { data } from "../../../lib/export/data";

export default function MainPage() {
  return (
    <S.MainDiv>
      <Board data={data} />
    </S.MainDiv>
  );
}
