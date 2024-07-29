import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SpeechToText from "./pages/SpeechToText";
import TextToSpeech from "./pages/TextToSpeech";
import ImageToText from "./pages/ImageToText";
import Translator from "./pages/Translator";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/speechtotext" element={<SpeechToText/>}/>
      <Route path="/texttospeech" element={<TextToSpeech/>}/>
      <Route path="/imagetotext" element={<ImageToText/>}/>
      <Route path="/translate" element={<Translator/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </Router>
  );
}

export default App;

