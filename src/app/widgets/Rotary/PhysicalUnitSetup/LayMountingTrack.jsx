import styled from '@emotion/styled';
import React from 'react';
import { RadioGroup, RadioButton } from 'app/components/Radio';
import sampleImg from '../assets/sample.png';
import styles from './index.styl';

const LayTrackWrapper = styled.div`
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

const RadioWrapper = styled.div`
  margin-top: 2rem;
  font-weight: 800;
`;

const LayMountingTrack = ({ setupState, setSetupState }) => {
    const { mountingTrackLinesUp } = setupState;
    const handleRadioChange = (value, event) => {
        setSetupState((prev) => ({ ...prev, mountingTrackLinesUp: value }));
    };

    return (
        <LayTrackWrapper>
            <Heading>
                Mounting Track Layout Marking
            </Heading>
            <ImageWrapper>
                <Img src={sampleImg} />
            </ImageWrapper>
            <Description>
                Please lay your Rotary Axis mounting track on the wasteboard and line up the mounting slots.
                Please make sure there is no interference with the T-tracks, inserts or any other component or wiring of the machine.
                Use a marker to leave a small pen mark on the first (front left) hole spot.
            </Description>
            <RadioWrapper>
                Do the mounting slots line up without any interference?
                <RadioGroup
                    name="slots"
                    value={mountingTrackLinesUp}
                    depth={2}
                    onChange={handleRadioChange}
                    size="small"
                >
                    <div className={styles.radio}>
                        <RadioButton label="Yes" value={true} />
                        <RadioButton label="No" value={false} />
                    </div>
                </RadioGroup>
            </RadioWrapper>
        </LayTrackWrapper>
    );
};

export default LayMountingTrack;
