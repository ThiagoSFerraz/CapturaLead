import Navbar from "./components/Navbar/Navbar";
import FifthPage from "./pages/fifthPage/FifthPage";
import FirstPage from "./pages/firstPage/FirstPage";
import FourthPage from "./pages/forthPage/FourthPage";
import SecondPage from "./pages/secondPage/SecondPage";
import ThirdPage from "./pages/thirdPage/ThirdPage";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </div>
  );
}

export default App;
