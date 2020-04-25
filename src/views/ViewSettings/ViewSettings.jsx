import React from 'react';
import { css } from 'aphrodite/no-important';
import RowItem from "src/components/molecules/RowItem"
import ButtonBack from 'src/components/molecules/ButtonBack';
import style from './style';
import { FaCog } from 'react-icons/fa';
import IconNatural from 'src/components/atoms/IconNatural/IconNatural';

const ViewSettings = () => {

  const header = { ...style.header._definition };
  const  textHeader = css(style.textHeader);

  return (
    <div className="settings">
      <RowItem
        styles={header}
        leftBody={
          <ButtonBack color="white" />
        }
        centerBody = {
        <p className={textHeader}>Configuraciones</p>
        }
        rightBody={
          <IconNatural text="" icon={<FaCog/>} coloricon="white" />
        }
        />
    </div>
  );

}

export default ViewSettings;
