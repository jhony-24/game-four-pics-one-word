import React from 'react'
import style from '../../style';
import Button from 'src/components/atoms/Button';
import Flex from 'src/components/dom/Flex';

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