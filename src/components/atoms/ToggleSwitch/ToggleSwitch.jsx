import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions";
import useToggle from 'src/use/useToggle';

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

export default ToggleSwitch;
