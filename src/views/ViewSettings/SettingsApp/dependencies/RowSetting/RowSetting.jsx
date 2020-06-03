import React from 'react'
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Paragraph from 'src/components/molecules/Paragraph';
import RowItem from "src/components/molecules/RowItem"
import Container from 'src/components/dom/Container';
import style from '../../style';

const RowSetting = ({ rightBody, title, detail, icon, bgIcon, src, onClick }) => {

    return (
        <Container>
            <RowItem
                styles={style.item}
                leftBody={
                    <Avatar color={bgIcon} icon={icon} src={src} />
                }
                centerBody={
                    <Container styles={style.ctnParagraph}>
                        <Paragraph colordetail="gray" title={title} detail={detail} />
                    </Container>
                }
                rightBody={rightBody}
                onClick={onClick}
            />
        </Container>
    )
}

export default RowSetting;
