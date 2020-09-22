import React from 'react'
import { IoIosMusicalNote } from 'react-icons/io';
import ToggleSwitch from 'src/components/atoms/ToggleSwitch';
import RowSetting from '../RowSetting/RowSetting';
import { connect } from 'react-redux';
import { discoverActions } from 'src/redux/discover';
import useLanguage from 'src/hooks/useInternationalize/useLanguage';

const RowSoundActive = ({ enableSound, changeSound }) => {
	const { translate } = useLanguage("game.settings.exit.sounds.row.");
    return (
        <RowSetting
            title={translate("0")}
            detail={translate("1")}
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
