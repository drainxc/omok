import Board from "./components/pages/board";
import MainPage from "./components/pages/mainPage";
import GlobalStyle from "./style/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/singleGame" element={<Board single={true} />} />
          <Route path="/localGame" element={<Board single={false} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
