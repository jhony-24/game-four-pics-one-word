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
import PropTypes from "prop-types"


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
  message: "",
  visible: false,
  onClose: () => null
}

Modal.propTypes = {
  title: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  message: PropTypes.oneOf([PropTypes.string, PropTypes.element, PropTypes.node]),
  visible: PropTypes.bool,
  onClose: PropTypes.func
}

export default Modal;
