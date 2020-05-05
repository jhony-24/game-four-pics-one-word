import React from 'react'
import { IoIosMusicalNote } from 'react-icons/io';
import ToggleSwitch from 'src/components/atoms/ToggleSwitch';
import RowSetting from '../subcomponents/RowSetting';
import { connect } from 'react-redux';
import { navigationActions } from "src/ducks/navigation";

const RowSoundActive = ({ enableSound, changeSound }) => {
    return (<>
        <RowSetting
            title="active sounds"
            detail="administra los sonidos generales"
            bgIcon="orange"
            icon={<IoIosMusicalNote color="white" />}
            rightBody={<ToggleSwitch checked={enableSound} onChange={changeSound} />}
        />
    </>)
}

const mapStateToProps = state => ({
    enableSound: state.navigation.enableSound
})

const mapDispatchToProps = {
    changeSound: navigationActions.enableSound
}
export default connect(mapStateToProps, mapDispatchToProps)(RowSoundActive);
