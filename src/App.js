import NavBar from "./Components/Nav/NavBar.js";
import Rarity from "./Components/Rarity/Rarity";
import Text from "./Components/Text/Text";
import Video from "./Components/Video/Video";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Timeline from "./Components/Roadmap/Timeline";
import "./App.css";

function App() {
  return (
    <div>
      <div id="Home">
        <NavBar />
      </div>
      <div>
        <Rarity />
      </div>
      <div id="Text">
        <Text />
      </div>

      <div>
        <Video />
      </div>
      <div>
        <About />
      </div>
      <div id="Roadmap">
        <Timeline />
      </div>
      <div className="mt-5" id="Team">
        <Team />
      </div>
      <div className="mt-5"id="FAQ">
        <Faq />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
