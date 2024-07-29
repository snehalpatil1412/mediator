// TextToSpeech.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function TextToSpeech() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Your browser does not support Speech Synthesis.');
    }
  };

  const home = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Text to Speech</h1>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here"
        style={{ display: 'block', width: '100%', marginBottom: '10px' }}
      />
      <button onClick={speakText} disabled={!text.trim()}>
        Speak
      </button>
      <button className="btn btn-primary" onClick={home}>Home</button>
    </div>
  );
}

export default TextToSpeech;
