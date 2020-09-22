import React, { useState } from 'react'
import RowSetting from './RowSetting';
import BottomSheet from 'src/components/molecules/BottomSheet';
import Button from 'src/components/atoms/Button';

const RowSettingSheet = (props) => {
		const { iconColor, avatar, textButtonSheet, titleSheet, title, detail, children, onSubmitSheet } = props;
    const [open, setOpen] = useState(false);

    const openSheet = state => {
        setOpen(state);
    }
    const onUpdateUser = () => {
        setOpen(false);
        onSubmitSheet();
    }

    return (<>
        <RowSetting
            title={title}
            detail={detail}
            bgIcon={iconColor}
            icon={avatar}
            onClick={openSheet}
        />
        <BottomSheet title={titleSheet} open={open} onClose={isClose => setOpen(isClose)}>
            {children}
            <Button onClick={onUpdateUser}>{textButtonSheet}</Button>
        </BottomSheet>
    </>)
}

export default RowSettingSheet;
