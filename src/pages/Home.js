// Home.js
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpeechToText from "./SpeechToText.js";
import TextToSpeech from "./TextToSpeech.js";
import ImageToText from "./ImageToText.js";
import Translator from "./Translator";
import PageNotFound from "./PageNotFound";
import PdfToDoc from "./PdfToDoc.js";
import DocToPdf from "./DocToPdf.js";

import { 
  Text,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel, 
} from '@chakra-ui/react';

function Home() {
  const navItems = [
    {
      label: "SpeechToText",
      href: "speechtotext",
    },
    {
      label: "TextToSpeech",
      href: "texttospeech",
    },
    {
      label: "Translator",
      href: "translator",
    },
    {
      label: "PdftoText",
      href: "imagetotext",
    },
    {
      label: "PdfToDoc",
      href: "pdftodoc",
    },
    {
      label: "DocToPdf",
      href: "doctopdf",
    },
  
  ];

  return (
    <>
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab>Speech To Text</Tab>
          <Tab>Text to Speech</Tab>
          <Tab>Translate</Tab>
          <Tab>Pdf text extraction</Tab>
          <Tab>Pdf to Doc</Tab>
          <Tab>Doc to Pdf</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Contain>
              <SpeechToText navItems={navItems} />
            </Contain>
          </TabPanel>
          <TabPanel>
            <Contain>
              <TextToSpeech navItems={navItems} />
            </Contain>
          </TabPanel>
          <TabPanel>
            <Contain>
              <Translator navItems={navItems} />
            </Contain>
          </TabPanel>
          <TabPanel>
            <Contain>
              <ImageToText navItems={navItems} />
            </Contain>
          </TabPanel>
          <TabPanel>
            <Contain>
              <PdfToDoc navItems={navItems} />
            </Contain>
          </TabPanel>
          <TabPanel>
            <Contain>
              <DocToPdf navItems={navItems} />
            </Contain>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Home;

const Contain = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
