import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import SpeechToText from "../pages/SpeechToText";
import TextToSpeech from "../pages/TextToSpeech";
import Translator from "../pages/Translator";
import ImageToText from "../pages/ImageToText";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home.js";
import PdfToDoc from "../pages/PdfToDoc";
import DocToPdf from "../pages/DocToPdf";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/speechtotext" element={<SpeechToText />} />
        <Route path="/texttospeech" element={<TextToSpeech />} />
        <Route path="/imagetotext" element={<ImageToText />} />
        <Route path="/translate" element={<Translator />} />
        <Route path="/pdftodoc" element={<PdfToDoc />} />
        <Route path="/doctopdf" element={<DocToPdf />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
