import styled from '@emotion/styled';
import React from 'react';
import sampleImg from '../assets/sample.png';

const RemoveTrackWrapper = styled.div`
  height: 100%;
  background: white;
  padding: 2rem;
`;

const Content = styled.div``;

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

export default function RemoveMountingTrack() {
    return (
        <RemoveTrackWrapper>
            <Heading>
                Remove Mounting Track
            </Heading>
            <ImageWrapper>
                <Img src={sampleImg} />
            </ImageWrapper>
            <Content>
                Please remove the rotary axis mounting track from the wasteboard.
                Once done, click &#39;Next&#39; to proceed to drill mounting holes on the marked locations from Step 1.
            </Content>
        </RemoveTrackWrapper>
    );
}
