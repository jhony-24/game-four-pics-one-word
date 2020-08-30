import React, { useState } from 'react';
import { StyleSheet } from 'aphrodite/no-important';
import { SCloseButton, STextMessage } from './FlatMessage.style';
import Flex from "src/components/dom/Flex"
import { IoIosCloseCircle } from "react-icons/io";
import { motion as Hide, AnimatePresence } from 'framer-motion';
import PropTypes from "prop-types"

const animateExit = { opacity: 0 };

const FlatMessage = ({ text, textColor, iconColor, verticalMargin, horizontalMargin }) => {
  const [visible, setVisible] = useState(true);
  const selfStyle = new StyleSheet.create({
		flex: {
			margin: `${verticalMargin || 0}px ${horizontalMargin || 0}px`
    },
  });
  const removeFlatMessage = () => {
		setVisible(false);
  }
	
  return (
		<AnimatePresence>
      {
				visible && (
					<Hide.div exit={animateExit}>
            <Flex styles={[style.message, selfStyle.flex]}>
							<STextMessage $color={textColor} >{text}</STextMessage>
              <SCloseButton onClick={removeFlatMessage} onKeyDown={removeFlatMessage} role="button" tabIndex="0">
                <IoIosCloseCircle color={iconColor} size={20} />
              </SCloseButton>
            </Flex>
          </Hide.div>
        )
      }
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
