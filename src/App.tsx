import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";
import { Pizza } from "./pages/Menu/Pizza/Pizza";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />}>
            <Route path="pizza" element={<Pizza />} />
            <Route path="burgers" element={<div>burgers</div>} />
            <Route path="drinks" element={<div>drinks</div>} />
          </Route>
          <Route path="cart" element={<div>cart</div>} />
          <Route path="login" element={<div>login</div>} />
          <Route path="register" element={<div>register</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
