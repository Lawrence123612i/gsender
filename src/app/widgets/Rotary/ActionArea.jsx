import React, { useContext } from 'react';
import FunctionButton from '../../components/FunctionButton/FunctionButton';
import actions from './actions';
import RotaryContext from './RotaryContext';

const ActionArea = () => {
    const { setShowUnitSetup } = useContext(RotaryContext);
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FunctionButton onClick={actions.runFullRotationTest}>Full Rotation Test</FunctionButton>
            <FunctionButton>Stock Turning</FunctionButton>
            <FunctionButton onClick={() => actions.runPhysicalRotaryUnitSetup(setShowUnitSetup)}>Physical Rotary Unit Setup</FunctionButton>
            <FunctionButton>Y-axis Alignment Setup</FunctionButton>
            <FunctionButton>Z-axis Probing Setup</FunctionButton>
        </div>
    );
};

export default ActionArea;
