import { Route, Routes } from "react-router-dom";
import MainLayout from "./pages/_components/MainLayout";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
