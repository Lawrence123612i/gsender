import React, { useContext, useState } from 'react';
import Modal from 'app/components/ToolModal/ToolModal';
import { PropTypes } from 'prop-types';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import RotaryContext from '../RotaryContext';
import LayMountingTrack from './LayMountingTrack';
import styles from './index.styl';
import RemoveMountingTrack from './RemoveMountingTrack';
import ZeroZAxis from './ZeroZAxis';

/**
 * @component PhysicalUnitSetup
 * @description Main component for displaying the Rotary Physical Unit Setup
 */
const PhysicalUnitSetup = () => {
    const { showUnitSetup, setShowUnitSetup } = useContext(RotaryContext);
    const [setupSettings, setSetupSettings] = useState(getInitialState());

    function getInitialState() {
        return ({
            mountingTrackLinesUp: true,
        });
    }

    const actions = {
        closeSetup: () => {
            setShowUnitSetup(false);
        },
        handleSubmit: () => {
            setShowUnitSetup(false);
            console.log('All settings saved!');
        },
    };

    const steps = [
        {
            label: 'Step 1',
            subtitle: '10%',
            name: 'step 1',
            content: <LayMountingTrack setupSettings={setupSettings} setSetupSettings={setSetupSettings} />
        },
        {
            label: 'Step 2',
            subtitle: '50%',
            name: 'step 2',
            content: <RemoveMountingTrack />,
            // validator: () => {}
        },
        {
            label: 'Step 3',
            subtitle: '100%',
            name: 'step 3',
            content: <ZeroZAxis />,
            // validator: () => {} Check if Z MPOS = 0
        }
    ];
    return (
        <Modal
            title="Physical Rotary Unit Setup" size="lg" show={showUnitSetup}
            onClose={actions.closeSetup}
            contentClass={styles.modalContent}
        >
            <StepProgressBar
                startingStep={0}
                onSubmit={actions.handleSubmit}
                steps={steps}
                wrapperClass={styles.setupWrapper}
                contentClass={styles.setupContent}
            />
        </Modal>
    );
};

PhysicalUnitSetup.propTypes = {
    modalClose: PropTypes.func.isRequired,
};

export default PhysicalUnitSetup;
