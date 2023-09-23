import { HashRouter, Route, Routes } from "react-router-dom";

import New from "../pages/New";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
