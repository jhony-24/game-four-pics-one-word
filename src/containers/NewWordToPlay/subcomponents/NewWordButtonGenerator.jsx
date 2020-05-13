import React from 'react'
import style from '../style';
import Button from 'src/components/atoms/Button';
import Flex from 'src/components/dom/Flex';

const NewWordButtonGenerator = ({ children, ...props }) => {
    return (
        <Button styles={style.button._definition} {...props}>
            <Flex styles={style.buttonFlexCenter._definition}>
                {children}
            </Flex>
        </Button>
    )
}

export default NewWordButtonGenerator;