import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HOME, DETAIL, NOT_EXIST } from "./Routes";
import { Home } from "./views/home/Home";
import { Detail } from "./views/detail/Detail";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={DETAIL} element={<Detail />} />
          <Route path={NOT_EXIST} element={<main>Not found</main>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
