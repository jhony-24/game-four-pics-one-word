import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/resources/tools/functions"
import PropTypes from "prop-types"

const FlatList = ({ styles, headerStyle, footerStyle, data, renderItem, headerList, footerList }) => {
  const list = css(style.flatLs, styleDynamic(styles));
  const header = css(style.flatLsHeader, styleDynamic(headerStyle));
  const footer = css(style.flatLsFooter, styleDynamic(footerStyle));
  const itemRender = css(style.flatLsRender);

  return (
    <div className={list}>
      <div className={header}>{headerList}</div>
      <div className={itemRender}>
        {
          data.map((currentData, index) => renderItem(currentData, index))
        }
      </div>
      <div className={footer}>{footerList}</div>
    </div>
  )
}

FlatList.defaultProps = {
  data: []
}

FlatList.propTypes = {
  styles: PropTypes.object,
  headerStyle: PropTypes.object,
  footerStyle: PropTypes.object,
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  headerList: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  footerList: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node])
}

export default FlatList;
