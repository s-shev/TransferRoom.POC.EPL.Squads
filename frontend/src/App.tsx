import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Teams } from "./pages/Teams";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams/*" element={<Outlet />}>
        <Route path="" element={<Teams />} />
        <Route path=":teamId/*" element={<>Team Id</>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
