import styled from '@emotion/styled';
import React from 'react';
import { RadioGroup, RadioButton } from 'app/components/Radio';
import SubmitButton from 'app/components/FunctionButton/FunctionButton';
import { EIGHTH_SIX, EIGHTH_TWELVE, EIGHTH_TWO, QUARTER_SIX, QUARTER_TWELVE, QUARTER_TWO } from './constants';
import styles from './index.styl';

const DrillHolesWrapper = styled.div`
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

const RadioWrapper = styled.div`
  margin-top: 2rem;
  font-weight: 800;
`;

const RadioMessage = styled.div``;

const ButtonWrapper = styled.div``;

const StartDrilling = styled.div`
    width: 7rem;
    margin: auto;
    margin-top: 2rem;
`;

const DrillHoles = ({ setupState, setSetupState }) => {
    const { drillingType } = setupState;
    const handleDrilling = () => {
        //TODO- drilling logic

        //Allow next step post drilling
        setSetupState((prev) => ({ ...prev, drillingComplete: true }));
    };
    const handleRadioChange = (value) => {
        setSetupState((prev) => ({ ...prev, mountingTrackLinesUp: value }));
    };
    return (
        <DrillHolesWrapper>
            <Heading>
                Drill mounting holes
            </Heading>
            <Description>
                gSender will now use the Z zero position as an origin/XY-Zero point for
                running a short program that will drill the mounting holes
                into the wasteboard for installing threaded inserts. <br />
            </Description>
            <RadioWrapper>
                <RadioMessage>
                    Please select the correct drill type below and click &#39;Start drilling&#39;
                </RadioMessage>
                <RadioGroup
                    value={drillingType}
                    defaultValue={QUARTER_SIX}
                    depth={2}
                    onChange={handleRadioChange}
                    size="small"
                >
                    <ButtonWrapper className={styles.drillRadio}>
                        <RadioButton label="¼” diameter endmill milling 6 holes for 30” track" value={QUARTER_SIX} />
                        <RadioButton label="⅛” diameter endmill milling 6 holes for 30” track" value={EIGHTH_SIX} />
                        <RadioButton label="¼” diameter endmill milling 12 holes for 30” track with extension" value={QUARTER_TWELVE} />
                        <RadioButton label="⅛” diameter endmill milling 12 holes for 30” track with extension" value={EIGHTH_TWELVE} />
                        <RadioButton label="¼” diameter endmill milling 2 holes for custom mounting solution" value={QUARTER_TWO} />
                        <RadioButton label="⅛” diameter endmill milling 2 holes for custom mounting solution" value={EIGHTH_TWO} />
                    </ButtonWrapper>
                </RadioGroup>
            </RadioWrapper>
            <StartDrilling>
                <SubmitButton primary onClick={handleDrilling}> Start Drilling </SubmitButton>
            </StartDrilling>
        </DrillHolesWrapper>
    );
};

export default DrillHoles;
