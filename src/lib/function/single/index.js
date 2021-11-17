import { Reset } from "../../../components/pages/board";
import { Ai } from "../AI";

export function Single(manage, reset, setBoard, putSound) {
  setTimeout(() => {
    // 0.3초 후에 AI 돌 놓기
    Ai(manage);
    if (reset) {
      Reset(setBoard);
      reset = false;
    } else {
      new Audio(putSound).play();
    }
  }, 1500); // AI 돌 놓기
}
