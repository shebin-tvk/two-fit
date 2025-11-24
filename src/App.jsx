import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllPrograms from "./pages/AllPrograms";
import OurStory from "./pages/OurStory";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";


function App() {
  return (
    <>
      <div className=" relative flex flex-col min-h-screen">
        <header >
          <Header />
        </header>
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<AllPrograms />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          {/* <Footer/> */}
        </footer>
      </div>
    </>
  );
}

export default App;
