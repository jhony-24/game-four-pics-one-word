import React, { lazy } from 'react';
import { css } from 'aphrodite/no-important';
import RowItem from "src/components/molecules/RowItem"
import ButtonBack from 'src/components/molecules/ButtonBack';
import style from './style';
import { FaCog } from 'react-icons/fa';
import IconNatural from 'src/components/atoms/IconNatural';
import { TEXT_PRIMARY } from 'src/tools/constants';
import LazyLoad from 'src/hoc/LazyLoad';
import LoadingPlaceholder from 'src/components/molecules/LoadingPlaceholder';

const SettingsApp = lazy(()=>import("src/containers/SettingsApp"));

const ViewSettings = () => {
  const header = { ...style.header._definition };
  const textHeader = css(style.textHeader);
  const colorLight = TEXT_PRIMARY;

  return (
    <div className="settings">
      <RowItem
        styles={header}
        leftBody={<ButtonBack color={colorLight} />}
        centerBody={<p className={textHeader}>Configuraciones</p>}
        rightBody={
          <IconNatural
            icon={<FaCog />}
            coloricon={colorLight}
          />}
      />
      <LazyLoad component={SettingsApp} loading={<LoadingPlaceholder/>} />
    </div>
  );
}

export default ViewSettings;
