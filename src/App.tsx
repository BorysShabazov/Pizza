import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>home page</div>} />
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
