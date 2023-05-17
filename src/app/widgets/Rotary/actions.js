import { Toaster, TOASTER_INFO } from 'app/lib/toaster/ToasterLib';
import controller from 'app/lib/controller';

const actions = {
    runPhysicalRotaryUnitSetup: (setShowUnitSetup) => {
        setShowUnitSetup(true);
    },
    runFullRotationTest: () => {
        Toaster.pop({
            msg: 'Running Rotary Full Rotation Test',
            type: TOASTER_INFO,
        });
        controller.command('gcode', ['G0 A0', 'G0 A360']);
    },
};

export default actions;
