import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
const App = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-white to-[#c08ed8]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
