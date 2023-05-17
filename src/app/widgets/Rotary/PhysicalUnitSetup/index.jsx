import React, { useContext, useState } from 'react';
import Modal from 'app/components/ToolModal/ToolModal';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { Toaster, TOASTER_WARNING } from 'app/lib/toaster/ToasterLib';
import RotaryContext from '../RotaryContext';
import LayMountingTrack from './LayMountingTrack';
import styles from './index.styl';
import RemoveMountingTrack from './RemoveMountingTrack';
import ZeroZAxis from './ZeroZAxis';
import DrillHoles from './DrillHoles';
import { QUARTER_SIX } from './constants';
import FinalInstallation from './FinalInstallation';

/**
 * @component PhysicalUnitSetup
 * @description Main component for displaying the Rotary Physical Unit Setup
 */
const PhysicalUnitSetup = () => {
    const { showUnitSetup, setShowUnitSetup } = useContext(RotaryContext);
    const [setupState, setSetupState] = useState(getInitialState());

    function getInitialState() {
        return ({
            mountingTrackLinesUp: true,
            drillingType: QUARTER_SIX,
            drillingComplete: false,
        });
    }

    function validateDrilling() {
        if (!setupState.drillingComplete) {
            Toaster.pop({
                msg: 'Please complete the drilling process to proceed to the next step',
                type: TOASTER_WARNING,
            });
        }
        return setupState.drillingComplete;
    }

    const actions = {
        cancelSetup: () => {
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
            subtitle: '20%',
            name: 'step 1',
            content: <LayMountingTrack setupState={setupState} setSetupState={setSetupState} />
        },
        {
            label: 'Step 2',
            subtitle: '40%',
            name: 'step 2',
            content: <RemoveMountingTrack />,
            // validator: () => {}
        },
        {
            label: 'Step 3',
            subtitle: '60%',
            name: 'step 3',
            content: <ZeroZAxis />,
            // validator: () => {} Check if Z MPOS = 0
        },
        {
            label: 'Step 4',
            subtitle: '80%',
            name: 'step 4',
            content: <DrillHoles setupState={setupState} setSetupState={setSetupState} />,
            validator: validateDrilling
        },
        {
            label: 'Step 5',
            subtitle: '100%',
            name: 'step 4',
            content: <FinalInstallation />,
            // validator: () => {}
        }
    ];

    return (
        <Modal
            title="Physical Rotary Unit Setup" size="lg" show={showUnitSetup}
            onClose={actions.cancelSetup}
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

export default PhysicalUnitSetup;
