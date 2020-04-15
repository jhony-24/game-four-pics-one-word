import React, { forwardRef } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"
import Flex from 'src/components/dom/Flex';




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
        value={value}
        onKeyUp={onChange}
        spellCheck={false} />
    </Flex>
  )

})



TextField.defaultProps = {
  type: "text",
  onChange: () => null
}




export default TextField;
