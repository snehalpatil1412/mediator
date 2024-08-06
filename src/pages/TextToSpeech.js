// TextToSpeech.js
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Textarea,Button } from "@chakra-ui/react";

function TextToSpeech() {
  const [text, setText] = useState("");
  // const navigate = useNavigate();
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const speakText = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Your browser does not support Speech Synthesis.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Text to Speech</h1>
      <Textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here"
      />
      
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={speakText}
        disabled={!text.trim()}
      >
        Speak
      </Button>
      
    </div>
  );
}

export default TextToSpeech;
