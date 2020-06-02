import React, { forwardRef } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import style from './style';
import Flex from 'src/components/dom/Flex';
import PropTypes from "prop-types"

const TextField = forwardRef(({ styles, icon, type, value, placeholder, onChange, colortext, coloricon, name }, ref) => {
  const selfStyle = new StyleSheet.create({
    input: {
      text: colortext
    },
    icon: {
      color: coloricon
    }
  })

  return (
    <Flex styles={[style.flex, styles]}>
      {
        icon && <span className={css(style.icon, selfStyle.icon)}>{icon}</span>
      }
      <input
        ref={ref}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={css(style.input, selfStyle.icon)}
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
