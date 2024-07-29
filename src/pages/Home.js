// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const speechtotext = () => {
    navigate("/speechtotext");
  };
  const texttospeech = () => {
    navigate("/texttospeech");
  };
  const translate = () => {
    navigate("/translate");
  };
  const imagetotext = () => {
    navigate("/imagetotext");
  };

  return (
    <>
      <h1 style={{textAlign:"center"}}>Mediator</h1>
      
      <div>
      
      <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
      <div className="card text-center mb-3" style={{ width: "100%" ,height: "150%" }}>
        <div className="card-body">
          <h5 className="card-title">Speech ToText</h5>
          <p className="card-text"> converts speech into a text</p>
          <button className="btn btn-primary" onClick={speechtotext}>Speech to text</button>
        </div>
      </div>
      </div>
      <div class="col">
      <div className="card text-center mb-3" style={{ width: "100%" ,height: "150%" }}>
        <div className="card-body">
          <h5 className="card-title">text to speech</h5>
          <p className="card-text"> converts text into a audible speech</p>
          <button className="btn btn-primary" onClick={texttospeech}>Text to Speech</button>
        </div>
      </div>
      </div>
      
     <div class="col">
      <div className="card text-center mb-3" style={{ width: "100%" ,height: "150%" }}>
        <div className="card-body">
          <h5 className="card-title">translate</h5>
          <p className="card-text"> translates any language into any specific specified language</p>
          <button  className="btn btn-primary" onClick={translate}>Translate</button>
        </div>
      </div>
      </div>
      <div class="col">
      <div className="card text-center mb-3" style={{ width: "100%" ,height: "150%" }}>
        <div className="card-body">
          <h5 className="card-title">ImageToText</h5>
          <p className="card-text"> converts image into a text</p>
          <button className="btn btn-primary" onClick={imagetotext}>continue</button>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;
