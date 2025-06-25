import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Teams } from "./pages/Teams";
import { TeamsProvider } from "./contexts/TeamsContext";
import { Squad } from "./pages/Squad";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/teams/*"
        element={
          <TeamsProvider>
            <Outlet />
          </TeamsProvider>
        }
      >
        <Route path="" element={<Teams />} />
        <Route path=":teamId/*" element={<Squad />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
