import "./App.css";
import Navbar from "./Sections/1 Header/Navbar";
import Home from "./Sections/2 Home/Home";
import Achivement from "./Sections/3 Achivements/Achivement";
import Courses from "./Sections/4 Course/Courses";
import Testimonial from "./Sections/5 Testimonial/Testimonial";
import Footer from "./Sections/6 Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Achivement />
      <Courses />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
