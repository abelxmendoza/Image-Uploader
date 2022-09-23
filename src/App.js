//import './App.css';
import React from 'react';
import ImageUploader from './components/ImageUploader';
import TextArea from './components/TextArea';
import styled from 'styled-components';


function App() {
  return (

        <Wrapper>

          <ImageUploader />
          <TextBoxes>
            <TextArea />
            <TextArea />
          </TextBoxes>
         
        </Wrapper>
    
  );  
}

export default App;

const Wrapper = styled.div`

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`
const TextBoxes = styled.div`


 
`

