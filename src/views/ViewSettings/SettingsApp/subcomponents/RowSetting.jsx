import React from 'react'
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Paragraph from 'src/components/molecules/Paragraph';
import RowItem from "src/components/molecules/RowItem"
import Container from 'src/components/dom/Container';
import style from '../style';

const RowSetting = ({ rightBody, title, detail, icon, bgIcon, src, onClick }) => {
    const avatar = { color: bgIcon, icon, src };
    const paragraph = { title, detail };

    return (
        <Container>
            <RowItem
                styles={style.item._definition}
                leftBody={
                    <Avatar {...avatar} />
                }
                centerBody={
                    <Container styles={style.ctnParagraph}>
                        <Paragraph colordetail="gray" {...paragraph} />
                    </Container>
                }
                rightBody={rightBody}
                onClick={onClick}
            />
        </Container>
    )
}

RowSetting.defaultProps = {
    bgIcon: "transparent",
    icon: null,
    src: null
}

export default RowSetting;
