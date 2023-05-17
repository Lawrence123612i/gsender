import styled from '@emotion/styled';
import React from 'react';
import sampleImg from '../assets/sample.png';

const FinalInstallationWrapper = styled.div`
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

export default function FinalInstallation() {
    return (
        <FinalInstallationWrapper>
            <Heading>
                Final Installation
            </Heading>
            <ImageWrapper>
                <Img src={sampleImg} />
            </ImageWrapper>
            <Description>
                Your wasteboard now has the appropriate mounting points for installing the mounting track.
                You may now install the threaded inserts into the recently drilled holes, then lay out the mounting track
                and screw it down to secure it on the wasteboard.<br /><br />
                Please make sure to zero the Y-Axis using the &#39;Y-axis alignment wizard&#39;.
            </Description>
        </FinalInstallationWrapper>
    );
}
