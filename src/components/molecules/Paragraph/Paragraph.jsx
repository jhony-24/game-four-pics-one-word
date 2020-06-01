import React, { memo } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import style from './style';
import Flex from "src/components/dom/Flex"
import PropTypes from "prop-types"

const Paragraph = ({ styles, title, detail, colortitle, colordetail }) => {
    const selfStyle = new StyleSheet.create({
        strong: {
            color: colortitle,
        },
        detail: {
            color: colordetail
        }
    })

    return (
        <Flex styles={[style.flex, styles]}>
            <div className={css(style.title, selfStyle.strong)}>{title}</div>
            <div className={css(style.detail, selfStyle.detail)}>{detail}</div>
        </Flex>
    )
}

Paragraph.propTypes = {
    styles: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    detail: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    colortitle: PropTypes.string,
    colordetail: PropTypes.string
}

export default memo(Paragraph);
