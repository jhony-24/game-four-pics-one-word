import React from 'react';
import { css } from 'aphrodite/no-important';
import { SFlatRender } from './FlatList.style';
import PropTypes from "prop-types"

const FlatList = ({ styles, headerStyle, footerStyle, data, renderItem, headerList, footerList }) => {

  return (
    <div className={css(styles)}>
      <div className={css(headerStyle)}>{headerList}</div>
			<SFlatRender>
        {
          data.map((currentData, index) => renderItem(currentData, index))
        }
			</SFlatRender>
      <div className={css(footerStyle)}>{footerList}</div>
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
