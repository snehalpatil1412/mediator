import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    useLocation,
  } from "react-router-dom";

  import{
     SpeechToText,
     TextToSpeech,
     Translator,
     ImageToText,
     PageNotFound
  } from "./pages"
  export default function AppRouter() {
    return (
      <>
        <Router>
          <Switch>
          <Route path="/speechtotext" component={<SpeechToText/>}/>
      <Route path="/texttospeech" component={<TextToSpeech/>}/>
      <Route path="/imagetotext" component={<ImageToText/>}/>
      <Route path="/translate" component={<Translator/>}/>
      <Route path="*" component={<PageNotFound/>}/>
            </Switch>
            </Router>
        </>
        );
    }
