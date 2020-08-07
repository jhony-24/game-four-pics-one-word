import React from 'react'
import { IoIosMusicalNote } from 'react-icons/io';
import ToggleSwitch from 'src/components/atoms/ToggleSwitch';
import RowSetting from '../RowSetting/RowSetting';
import { connect } from 'react-redux';
import { discoverActions } from 'src/redux/discover';

const RowSoundActive = ({ enableSound, changeSound }) => {
    return (
        <RowSetting
            title="active sounds"
            detail="administra los sonidos generales"
            bgIcon="orange"
            icon={<IoIosMusicalNote color="white" />}
            rightBody={<ToggleSwitch checked={enableSound} onChange={changeSound} />}
        />
    )
}

const mapStateToProps = state => ({
    enableSound: state.discover.enableSound
})

const mapDispatchToProps = {
    changeSound: discoverActions.switchEnableSound,
}
export default connect(mapStateToProps, mapDispatchToProps)(RowSoundActive);
