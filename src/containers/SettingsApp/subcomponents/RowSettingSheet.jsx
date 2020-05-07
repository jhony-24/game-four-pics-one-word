import React, { useState } from 'react'
import RowSetting from '../subcomponents/RowSetting';
import BottomSheet from 'src/components/molecules/BottomSheet';
import Button from 'src/components/atoms/Button';

const RowSettingSheet = ({ bgIcon, icon, textButton, titleSheet, title, detail, children, onClick }) => {
    const [open, setOpen] = useState(false);

    const openSheet = state => {
        setOpen(state);
    }

    const onUpdateUser = () => {
        setOpen(false);
        onClick();
    }

    return (<>
        <RowSetting
            title={title}
            detail={detail}
            bgIcon={bgIcon}
            icon={icon}
            onClick={openSheet}
        />
        <BottomSheet title={titleSheet} open={open} onClose={isClose => setOpen(isClose)}>
            {children}
            <Button onClick={onUpdateUser}>{textButton}</Button>
        </BottomSheet>
    </>)
}

export default RowSettingSheet;
