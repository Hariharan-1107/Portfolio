import Navbar from "./assets/Components/Navbar";
import Hero from "./assets/Components/Hero";
import About from "./assets/Components/About";
import Techstack from "./assets/Components/Techstack";
import Projects from "./assets/Components/Projects";
import Contact from "./assets/Components/Contact";
function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-700 selection:text-cyan-900 ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-10">
        <Navbar />
        <Hero />
        <Techstack />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
