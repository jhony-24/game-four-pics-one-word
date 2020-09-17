import React, { lazy } from 'react';
import { css } from 'aphrodite/no-important';
import RowItem from "src/components/molecules/RowItem"
import ButtonBack from 'src/components/molecules/ButtonBack';
import style from './ViewSettings.style';
import { FaCog } from 'react-icons/fa';
import IconNatural from 'src/components/atoms/IconNatural';
import { TEXT_PRIMARY } from 'src/theme';
import LazyLoad from 'src/components/hoc/LazyLoad';
import LoadingPlaceholder from 'src/components/molecules/LoadingPlaceholder';

const SettingsApp = lazy(()=>import("./SettingsApp"));

const ViewSettings = () => {
  const colorLight = TEXT_PRIMARY;

  return (
    <div className="settings">
      <RowItem
        styles={style.header}
        leftBody={<ButtonBack color={colorLight} />}
        centerBody={<p className={css(style.textHeader)}>Configuraciones</p>}
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
