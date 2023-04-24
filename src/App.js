import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;

// <Routes>
//   <Route path="/" element={<Layout />}></Route>
// </Routes>
