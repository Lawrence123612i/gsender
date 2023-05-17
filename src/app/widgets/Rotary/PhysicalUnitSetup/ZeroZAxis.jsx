import React from 'react';
import styled from '@emotion/styled';
import sampleImg from '../assets/sample.png';

const ZeroZAxisWrapper = styled.div`
  height: 100%;
  background: white;
  padding: 2rem;
`;

const Description = styled.div``;

const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const ImageWrapper = styled.div``;

const Img = styled.img`
  width: 20%;
  display: block;
  margin: auto;
  padding: 1rem;
`;

export default function ZeroZAxis() {
    return (
        <ZeroZAxisWrapper>
            <Heading>
                Zero Z Axis
            </Heading>
            <ImageWrapper>
                <Img src={sampleImg} />
            </ImageWrapper>
            <Description>
                We will now be setting the Z axis to zero(0) at the marked position from Step 1.
                This will give a starting position for the machine to drill all the mounting holes.<br /><br />
                You can zero the Z-axis onto the wasteboard surface here by whichever means best works for you,
                such as using a touchplate, &#39;paper method&#39; or even eyeballing.
            </Description>
        </ZeroZAxisWrapper>
    );
}
