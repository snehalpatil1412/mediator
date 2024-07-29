// ImageToText.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';

function ImageToText() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    setLoading(true);
    setError(null);

    const file = acceptedFiles[0];
    Tesseract.recognize(
      file,
      'eng',
      {
        logger: (info) => console.log(info),
      }
    )
      .then(({ data: { text } }) => {
        setText(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error recognizing text:', err);
        setError('An error occurred while recognizing the text.');
        setLoading(false);
      });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Image to Text Converter</h1>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #ccc',
          borderRadius: '4px',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h2>Extracted Text</h2>
        <textarea
          rows="10"
          cols="50"
          value={text}
          readOnly
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />
        <button onClick={copyToClipboard} disabled={!text}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}

export default ImageToText;
