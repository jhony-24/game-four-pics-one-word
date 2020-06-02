import React, { memo } from 'react'
import Text from 'src/components/atoms/Text';
import Flex from "src/components/dom/Flex";
import { StyleSheet } from 'aphrodite/no-important';

const style = new StyleSheet.create({
    flex: {
        flexDirection: "column"
    },
    username: {
        fontSize: "1.5em",
        fontWeight: "bold"
    },
    margin: {
        margin: "5px 0"
    }
});

const HeaderSettingsUsername = ({ title, details }) => {
    return (
        <Flex styles={style.flex}>
            <Text styles={[style.username, style.margin]}>{title}</Text>
            <Text styles={style.margin} color="gray" >{details}</Text>
        </Flex>
    )
}

export default memo(HeaderSettingsUsername);