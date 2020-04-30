import React from 'react'
import { IoIosMusicalNote } from 'react-icons/io';
import ToggleSwitch from 'src/components/atoms/ToggleSwitch';
import RowSetting from '../subcomponents/RowSetting';

const RowSoundActive = () => {
    return (<>
        <RowSetting
            title="active sounds"
            detail="administra los sonidos generales"
            bgIcon="orange"
            icon={<IoIosMusicalNote color="white" />}
            rightBody={<ToggleSwitch />}
        />
    </>)
}

export default RowSoundActive;
