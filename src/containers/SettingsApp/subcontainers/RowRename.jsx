import React from 'react'
import { IoIosText } from 'react-icons/io';
import ToggleSwitch from 'src/components/atoms/ToggleSwitch';
import RowSetting from '../subcomponents/RowSetting';

const RowRename = () => {
    return (<>
        <RowSetting
            title="change my name"
            detail="tener nuevo nombre de usuario"
            bgIcon="rgb(30,130,230)"
            icon={<IoIosText color="white" />}
            rightBody={<ToggleSwitch />}
        />
    </>)
}

export default RowRename;
