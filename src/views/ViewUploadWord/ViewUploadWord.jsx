import React from 'react';
import style from './style';
import { css } from 'aphrodite/no-important';
import imageUpload from "../../../images/image_upload.svg";
import Flex from "src/components/dom/Flex";
import RowItem from "src/components/molecules/RowItem"
import { IoIosArrowBack } from "react-icons/io"
import IconNatural from "src/components/atoms/IconNatural"
import Paragrah from "src/components/molecules/Paragraph"
import UploadNewWord from "src/containers/UploadNewWord";


const ViewUploadWord = () => {
  return (
    <div className="v-upload">

      <RowItem
        styles={style.header._definition}
        leftBody={
          <span onClick={() => window.history.back()}>
            <IconNatural icon={<IoIosArrowBack size={20} />} />
          </span>
        } />

      <Flex styles={style.flex._definition}>
        <img src={imageUpload} className={css(style.img)} />
        <Paragrah
          styles={style.paragraph._definition}
          title="Subir imagenes"
          detail="te recomendamos que las imagenes estén relacionados con la palabra"
          colordetail="gray" />

        <UploadNewWord />

      </Flex>

    </div>
  )
}




export default ViewUploadWord;
