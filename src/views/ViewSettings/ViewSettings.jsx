import React from 'react';
import { css } from 'aphrodite/no-important';
import RowItem from "src/components/molecules/RowItem"
import ButtonBack from 'src/components/molecules/ButtonBack';
import style from './style';
import { FaCog } from 'react-icons/fa';
import IconNatural from 'src/components/atoms/IconNatural';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Paragraph from 'src/components/molecules/Paragraph';
import { TEXT_PRIMARY } from 'src/tools/constants';
import { IoIosMoon, IoIosMusicalNote, IoIosText } from 'react-icons/io';
import TextField from 'src/components/atoms/TextField';
import ToggleSwitch from 'src/components/atoms/ToggleSwitch/ToggleSwitch';

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

      <RowItem
        styles={{ padding: "20px 15px" }}
        leftBody={<Avatar src="https://image.shutterstock.com/image-photo/casually-handsome-confident-young-man-260nw-439433326.jpg" />}
        centerBody={
          <Paragraph
            title="Cambiar mi nombre"
            detail="10 publicaciones" colordetail="gray" />
        }
      />

      <RowItem
        styles={{ padding: "20px 15px" }}
        leftBody={<Avatar color="rgb(60,60,60)" icon={<IoIosMoon color="white" />} />}
        centerBody={<Paragraph title="dark mode" />}
      />

      <RowItem
        styles={{ padding: "20px 15px" }}
        leftBody={<Avatar color="orange" icon={<IoIosMusicalNote color="white" />} />}
        centerBody={<Paragraph title="active sounds" />}
      />

      <RowItem
        styles={{ padding: "20px 15px" }}
        leftBody={<Avatar color="rgb(30,130,230)" icon={<IoIosText color="white" />} />}
        centerBody={
          <Paragraph
            title="Cambiar mi nombre" />
        }
      />


    </div>
  );

}

export default ViewSettings;
