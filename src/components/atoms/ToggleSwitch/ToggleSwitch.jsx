import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import useToggle from 'src/use/useToggle';
import PropTypes from "prop-types"

const ToggleSwitch = ({ checked, onChange }) => {

  const [state, setToggle] = useToggle(checked);
  const handlerChange = () => [
    setToggle(),
    onChange(state)
  ]

  return (
    <label className={css(style.ctnSwitch)} >
      <input
        type="checkbox"
        className={css(style.input)}
        checked={state}
        onChange={handlerChange} />
      <div className={css(style.check)}></div>
    </label>
  )
}

ToggleSwitch.defaultProps = {
  checked: false,
  onChange: () => null
}

ToggleSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default ToggleSwitch;
