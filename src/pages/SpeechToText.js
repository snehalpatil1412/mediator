// SpeechToText.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function SpeechToText() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          }
        }
        setTranscript(finalTranscript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
      };

      setRecognition(recognition);
    } else {
      alert('Your browser does not support Speech Recognition.');
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcript).then(
      () => {
        alert('Copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  const home = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Speech to Text</h1>
      <button onClick={startListening} disabled={listening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!listening}>
        Stop Listening
      </button>
      <button className="btn btn-primary" onClick={home}>Home</button>
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h2>Transcript</h2>
        <p>{transcript || 'No transcript available yet.'}</p>
      </div>
      <button onClick={copyToClipboard} disabled={!transcript}>
        Copy to Clipboard
      </button>
    </div>
  );
}

export default SpeechToText;
