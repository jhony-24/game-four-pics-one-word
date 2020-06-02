import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import PropTypes from "prop-types"

const FlatList = ({ styles, headerStyle, footerStyle, data, renderItem, headerList, footerList }) => {

  return (
    <div className={css(style.flatLs, styles)}>
      <div className={css(style.flatLsHeader, headerStyle)}>{headerList}</div>
      <div className={css(style.flatLsRender)}>
        {
          data.map((currentData, index) => renderItem(currentData, index))
        }
      </div>
      <div className={css(style.flatLsFooter, footerStyle)}>{footerList}</div>
    </div>
  )
}

FlatList.defaultProps = {
  data: []
}

FlatList.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  headerList: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  footerList: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node])
}

export default FlatList;
