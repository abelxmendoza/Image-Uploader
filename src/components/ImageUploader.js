import React from 'react'
import styled from 'styled-components'
import UploadAndDisplayImage from './UploadAndDisplayImage'

const ImageUploader = () => {
  return (

    <Wrapper>

        <Content>

            <img

                id='uploaderIcon'
                src='/images/uploadIndicator.png' 
                alt='uploaderIcon'
            />

            

            <h3> PNG, JPEG files only </h3>

           <UploadAndDisplayImage />

        </Content>
        
    
    </Wrapper>
  



  )
}

export default ImageUploader

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
    border-radius: 5%;
    color: #C0C0C0	;	
;
    -webkit-box-shadow: 1px 3px 22px 2px rgba(105,105,105,0.78); 
box-shadow: 1px 3px 22px 2px rgba(105,105,105,0.78);


`

const Content = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 300px;


`