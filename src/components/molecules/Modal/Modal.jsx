import React, { Fragment } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import Flex from "src/components/dom/Flex"
import Position from "src/components/dom/Position"
import { IoIosClose } from "react-icons/io"
import Paragraph from "src/components/molecules/Paragraph"
import Fade from "src/components/dom/Fade"
import { Portal } from 'react-portal';
import { useState } from 'react';



export const useModal = () => {
  const [isShowing, setShowing] = useState(false);
  function toggle() {
    setShowing(!isShowing);
  }
  return {
    isShowing,
    toggle
  }
}



const Modal = ({ title, message, visible, onClose }) => {


  return (
    visible &&
    <Portal>
      <div className={css(style.backdrop)}>
        <Fade type="in" >
          <Position
            position="fixed"
            left="0px"
            right="0px"
            top="0px"
            bottom="0px" >
            <Flex styles={style.modalCtn._definition} >
              <div className={css(style.modal)} >
                <Flex>
                  <span className="i-h"><strong>{title}</strong></span>
                  <span className="i-h"><IoIosClose size={25} onClick={onClose} /></span>
                </Flex>
                <Flex>
                  <Paragraph detail={message} colordetail="rgb(80,80,80)" />
                </Flex>
              </div>
            </Flex>
          </Position>
        </Fade>
      </div>
    </Portal>
  )
}



Modal.defaultProps = {
  title: "modal",
  message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio cupiditate error accusamus repellat unde praesentium est voluptatum soluta perspiciatis expedita, ipsum consequuntur, architecto aliquam aspernatur porro sed similique molestiae.",
  visible: false,
  onClose: () => null
}



export default Modal;
