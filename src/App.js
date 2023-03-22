import { useEffect, useState } from "react";
import Generate from "./components/Generate";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Decode from "./components/Decode";
import NotFound from "./components/404";
import "./App.css"
function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/generate')
  }, [])

    //Generate page
    const [genText, setGenText] = useState("")
    const [morseCodeElement, setMorseCodeElement] = useState([])
    const [morseCode, setMorseCode] = useState("")

    //Decode Page
    const [morseEntered, setMorseEntered] = useState('');
    const [morseElement, setMorseElement] = useState([]);
    const [decodedText, setDecodedText] = useState("");


  return (
   <div className="PARENT_ELEMENT">
    <h1 className="mainHeading">Morse Code <br /> <span>translator</span> </h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/generate" className={({isActive})=> isActive ? "activeLink" : "Link"}>Generate</NavLink>
        </li>
        <li>
          <NavLink to="/decode" className={({isActive})=> isActive ? "activeLink" : "Link"}>Decode</NavLink>
        </li>
      </ul>
    </nav>
    <main className="MAIN_SECTION">
      <Routes>
        <Route path="/generate/" element={
          <Generate 
            genText={genText}
            setGenText={setGenText}
            morseCodeElement={morseCodeElement}
            setMorseCodeElement={setMorseCodeElement}
            morseCode={morseCode}
            setMorseCode={setMorseCode}
           />
        } />
        <Route path="/decode/" element={
          <Decode 
            morseEntered={morseEntered}
            setMorseEntered={setMorseEntered}
            morseElement={morseElement}
            setMorseElement={setMorseElement}
            decodedText={decodedText}
            setDecodedText={setDecodedText}
          />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <footer className="FOOTER_SECTION">
      <p>This is a project <br/> developed by <a href="https://www.linkedin.com/in/armaanchaand/" target="_blank" className="link_style">armaan</a></p>
    </footer>
   </div>
  );
}

export default App;