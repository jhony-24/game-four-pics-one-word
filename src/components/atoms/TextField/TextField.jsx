import React, { forwardRef } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"
import Flex from 'src/components/dom/Flex';
import PropTypes from "prop-types"


const TextField = forwardRef(({ styles, icon, type, value, placeholder, onChange, colortext, coloricon, name }, ref) => {

  const flex = { ...style.flex._definition, ...styles };
  const inputStyle = css(style.input, styleDynamic({ colortext }));
  const iconStyle = css(style.icon, styleDynamic({ coloricon }));

  return (
    <Flex styles={flex}>
      {
        icon && <span className={iconStyle}>{icon}</span>
      }
      <input
        ref={ref}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputStyle}
        defaultValue={value}
        onKeyUp={onChange}
        spellCheck={false} />
    </Flex>
  )

})


TextField.defaultProps = {
  value: '',
  type: "text",
  onChange: () => null
}

TextField.propTypes = {
  styles: PropTypes.object,
  icon: PropTypes.element,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  colortext: PropTypes.string,
  coloricon: PropTypes.string,
  name: PropTypes.string
}

export default TextField;
