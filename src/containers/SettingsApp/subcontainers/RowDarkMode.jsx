import React from 'react'
import { IoIosMoon } from 'react-icons/io';
import ToggleSwitch from 'src/components/atoms/ToggleSwitch';
import RowSetting from '../subcomponents/RowSetting';

const RowDarkMode = () => {
    return (<>
        <RowSetting
            title="dark mode"
            detail="cambiar la apariencia"
            bgIcon="rgb(60,60,60)"
            icon={<IoIosMoon color="white" />}
            rightBody={<ToggleSwitch />}
        />
    </>)
}

export default RowDarkMode;
