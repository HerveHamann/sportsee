import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";

import Home from "./pages/Home";
import { DataProvider } from "./DataContext";

const App = () => {
  return (
    <BrowserRouter basename="/sportsee">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
