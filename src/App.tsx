import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Menu } from "./pages/Menu/Menu";
import { Pizza } from "./pages/Menu/Pizza/Pizza";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/menu/pizza" />} />
          <Route path="menu" element={<Menu />}>
            <Route path="pizza" element={<Pizza />} />
            <Route path="burgers" element={<div>burgers</div>} />
            <Route path="drinks" element={<div>drinks</div>} />
          </Route>
          <Route path="cart" element={<div>cart</div>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
