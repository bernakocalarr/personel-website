import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Talents from "./pages/Talents";
import Autobiography from "./pages/Autobiography";


import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteAccount from "./pages/DeleteAccount";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Autobiography />} />

        <Route path="/works" element={<Portfolio />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/deleteaccount" element={<DeleteAccount />} />
      </Routes>
    </>
  );
}

export default App;
