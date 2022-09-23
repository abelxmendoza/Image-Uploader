import React from 'react'
import styled from 'styled-components'


const TextArea = () => {

  return (
    <Wrapper>
      <Title>
        <h4>Text Box</h4>
      </Title>
      <textarea 
        name="textarea" 
        rows="20" 
        cols="50"
        placeholder='This is a text area. Populate it with 3 paragraphs ~25 words&#10; 
        each. Ex:&#10;
        Paragraph one (20 words)&#10;
        (line break)&#10;
        Paragraph two (25 words)&#10;
        (line break)&#10;
        Paragraph three (10 words)'>
          

         

          
      </textarea>
  

    </Wrapper>
  )
}

export default TextArea


const Wrapper = styled.div`
  width: 422px;
  height: 400px;
  border-radius: 5px;
  margin: 10px;
  
-webkit-box-shadow: 1px 3px 22px 2px rgba(105,105,105,0.78); 
box-shadow: 1px 3px 22px 2px rgba(105,105,105,0.78);


`
const Title = styled.div`
      

      display: flex;
      align-items: center;
      height: 40px;
      margin-bottom: 4px;

      -webkit-box-shadow: -3px 11px 21px 0px rgba(245,245,63,0.81);
-moz-box-shadow: -3px 11px 21px 0px rgba(245,245,63,0.81);
box-shadow: -3px 11px 21px 0px rgba(245,245,63,0.81);


`