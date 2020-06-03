import React from 'react'
import Button from 'src/components/atoms/Button';
import Flex from 'src/components/dom/Flex';
import { StyleSheet } from 'aphrodite';
import { SILVER_COLOR, TEXT_DARK } from "src/resources/tools/constants";

const style = new StyleSheet.create({
    button: {
        width: "100%",
        margin: "2em 2em",
        background: SILVER_COLOR,
        color: TEXT_DARK
    },
    buttonFlexCenter: {
        justifyContent: "center"
    }
});

const NewWordButtonGenerator = ({ children, ...props }) => {
    return (
        <Button styles={style.button} {...props}>
            <Flex styles={style.buttonFlexCenter}>
                {children}
            </Flex>
        </Button>
    )
}

export default NewWordButtonGenerator;