import React, { useState } from 'react';
import { SCloseButton, SFlex, STextMessage } from './FlatMessage.style';
import { IoIosCloseCircle } from "react-icons/io";
import { motion as Hide, AnimatePresence } from 'framer-motion';
import PropTypes from "prop-types"

const animateExit = { opacity: 0 };

const FlatMessage = ({ text, textColor, iconColor, verticalMargin, horizontalMargin }) => {
  const [visible, setVisible] = useState(true);
  const removeFlatMessage = () => {
		setVisible(false);
  }
	
  return (
		<AnimatePresence>
      {visible && (
					<Hide.div exit={animateExit}>
            <SFlex $verticalMargin={verticalMargin} $horizonatalMarign={horizontalMargin}>
							<STextMessage $color={textColor} >{text}</STextMessage>
              <SCloseButton onClick={removeFlatMessage} onKeyDown={removeFlatMessage} role="button" tabIndex="0">
                <IoIosCloseCircle color={iconColor} size={20} />
              </SCloseButton>
            </SFlex>
          </Hide.div>
      )}
    </AnimatePresence>
  )
}

FlatMessage.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  textColor: PropTypes.string,
  iconColor: PropTypes.string,
  verticalMargin: PropTypes.number,
  horizontalMargin: PropTypes.number
}

export default FlatMessage;
