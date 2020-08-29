import React from 'react';
import { css } from 'aphrodite/no-important';
import style, { SModalCardContainer, SModalContainer } from './style';
import Flex from "src/components/dom/Flex"
import { IoIosClose } from "react-icons/io"
import Paragraph from "src/components/molecules/Paragraph"
import Fade from "src/components/dom/Fade"
import { Portal } from 'react-portal';
import PropTypes from "prop-types"
import SWrapperFixedFullScreen from 'src/components/styled/wrappers/SWrapperFixedFullScreen';

const Modal = ({ title, message, visible, onClose }) => {

  return (
    visible &&
    <Portal>
      <div className={css(style.backdrop)}>
        <Fade type="in" >
					<SWrapperFixedFullScreen>
							<SModalContainer>
							<SModalCardContainer>
                <Flex>
                  <span className="i-h"><strong>{title}</strong></span>
                  <span className="i-h" onClick={onClose} onKeyDown={onClose} role="button" tabIndex="0" >
                    <IoIosClose size={25} />
                  </span>
                </Flex>
                <Flex>
                  <Paragraph detail={message} colordetail="rgb(80,80,80)" />
                </Flex>
							</SModalCardContainer>
							</SModalContainer>
					</SWrapperFixedFullScreen>
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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  visible: PropTypes.bool,
  onClose: PropTypes.func
}

export default Modal;
