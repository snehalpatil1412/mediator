import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjsLib from 'pdfjs-dist/webpack';
import { Document, Packer, Paragraph, TextRun, Formatting } from 'docx';
import { saveAs } from 'file-saver';

const PdfToDoc = () => {
    const [downloadUrl, setDownloadUrl] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const typedArray = new Uint8Array(reader.result);
        pdfjsLib.getDocument(typedArray).promise.then(pdf => {
          const numPages = pdf.numPages;
          let textContent = '';
          const pagePromises = [];
          for (let pageNum = 1; pageNum <= numPages; pageNum++) {
            pagePromises.push(
              pdf.getPage(pageNum).then(page => {
                return page.getTextContent().then(content => {
                  content.items.forEach(item => {
                    textContent += item.str + ' ';
                  });
                });
              })
            );
          }
          Promise.all(pagePromises).then(() => {
            createDocFile(textContent);
          });
        });
      };
      reader.readAsArrayBuffer(file);
    }, []);
  
    const createDocFile = (textContent) => {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun(textContent),
                ],
              }),
            ],
          },
        ],
      });
  
      Packer.toBlob(doc).then(blob => {
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
      });
    };
  
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
    return (
      <div>
        <div {...getRootProps({ className: 'dropzone' })} style={dropzoneStyle}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop a PDF file here, or click to select one</p>
        </div>
        {downloadUrl && (
          <a href={downloadUrl} download="converted.docx" style={downloadLinkStyle}>
            Download .docx file
          </a>
        )}
      </div>
    );
  };
  
  const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    margin: '20px 0'
  };
  
  const downloadLinkStyle = {
    display: 'block',
    marginTop: '20px',
    textDecoration: 'none',
    color: '#007bff'
  };
  
export default PdfToDoc;
