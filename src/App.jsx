import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Talents from "./pages/Talents";
import Autobiography from "./pages/Autobiography";


import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Autobiography />} />

        <Route path="/works" element={<Portfolio />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
