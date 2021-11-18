import { Ai } from "../AI";

export function Single(manage, putSound, e) {
  e.target.style = "opacity: 1;";
  new Audio(putSound).play();
  setTimeout(() => {
    // 0.3초 후에 AI 돌 놓기
    Ai(manage);
  }, 1500); // AI 돌 놓기
}
